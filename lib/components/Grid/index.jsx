import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GridItem from '../GridItem';
import GridContainer from './styles';

const sizes = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'];

const initializeStartColumns = s => s.reduce((a, c) => {
  a[c] = 1;
  return a;
}, {});

const isGridItem = ({ type }) => {
  try {
    if (type !== GridItem) {
      throw new TypeError(`If you want to use a Grid component you must provide GridItem components as children. Instead received ${type}.`);
    }
    return true;
  } catch (e) {
    console.error(e);
    return false;
  }
};

const getSizeFromColumns = columns => Number(columns.split('/')[1]) - Number(columns.split('/')[0]);

const validateSize = (size) => {
  try {
    if (typeof size !== 'number') {
      throw new TypeError(`Size prop must be a number. Instead received ${typeof size}.`);
    } else if (size > 12) {
      throw new RangeError(`Size prop must be a number less or equal 12. Instead received ${size}.`);
    } else if (size < 1) {
      throw new RangeError(`Size prop must be a number bigger than 0. Instead received ${size}.`);
    }
    return size;
  } catch (e) {
    return console.error(e);
  }
};

class Grid extends Component {
  constructor(props) {
    super(props);
    this.initializeGrid(this.props);
    this.initialized = false;
  }

  componentWillReceiveProps(np) {
    if (np.dynamic) {
      this.initializeGrid(np);
    }
  }

  shouldComponentUpdate(np) {
    return np.dynamic;
  }

  initializeGrid = (props) => {
    this.startColumns = initializeStartColumns(sizes);
    props.children.map(child => isGridItem(child) && this.modifyProps(child));
  }

  modifyProps = (child) => {
    let lastSize = 1;
    let lastOffset = 0;
    sizes.map((size) => {
      const childSize = child.props[size];
      const columns = String(childSize).includes('/') ? getSizeFromColumns(childSize) : validateSize(childSize);
      lastSize = columns || lastSize;
      lastOffset = child.props[`${size}-offset`] || lastOffset;
      const sum = this.startColumns[size] + lastOffset + lastSize;
      const [start, end] = (sum > 13) ? [1 + lastOffset, 1 + lastSize + lastOffset] : [this.startColumns[size] + lastOffset, sum];
      child.props[size] = `${start}/${end}`;
      this.startColumns[size] = end;
    });
  }

  render() {
    if (!this.initialized) {
      this.constantProps = this.props;
      this.initialized = true;
    }

    return (
      <GridContainer
        className={this.props.className}
        fluid={this.props.fluid}
        style={this.props.style}
      >
        {this.props.children}
      </GridContainer>
    );
  }
}

Grid.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  dynamic: PropTypes.bool,
  fluid: PropTypes.bool,
  style: PropTypes.object,
};

Grid.defaultProps = {
  className: '',
  dynamic: false,
  fluid: false,
  style: {},
};

export default Grid;
