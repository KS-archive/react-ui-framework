import React, { PureComponent } from 'react';
import GridItem from '../GridItem';
import GridContainer from './styles';

const sizes = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'];

const initializeStartColumns = s => s.reduce((a, c) => {
  a[c] = 1;
  return a;
}, {});

const isGridItem = ({ type }) => {
  if (type !== GridItem) {
    console.error('If you want to use a Grid component you must provide GridItem components as children');
    return false;
  }
  return true;
};

export default class Grid extends PureComponent {
  constructor(props) {
    super(props);
    this.startColumns = initializeStartColumns(sizes);
    this.props.children.map(child => isGridItem(child) && this.modifyProps(child));
  }

  getDerivedStateFromProps(np) {
    if (np.dynamic) {
      this.startColumns = initializeStartColumns(sizes);
      this.props.children.map(child => isGridItem(child) && this.modifyProps(child));
    }
  }

  modifyProps = (child) => {
    let lastSize = 1;
    sizes.map((size) => {
      lastSize = child.props[size] || lastSize;
      const sum = this.startColumns[size] + lastSize;
      const [start, end] = (sum > 13) ? [1, 1 + lastSize] : [this.startColumns[size], sum];
      child.props[size] = `${start}/${end}`;
      this.startColumns[size] = end;
    });
  }

  render() {
    return (
      <GridContainer {...this.props}>
        {this.props.children}
      </GridContainer>
    );
  }
}
