import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Checkbox from '../Checkbox';
import { Container, Items, Error } from './styles';

class ChceckboxGroup extends PureComponent {
  static getDerivedStateFromProps(props, state) {
    return (props.value !== state.value) ? { value: { ...state.value, ...props.value } } : null;
  }

  constructor(props) {
    super(props);
    const value = props.items.reduce((acc, item) => {
      acc[item.name] = acc[item.name] || false;
      return acc;
    }, { ...props.value });
    this.state = { value };
  }

  onChange = (name, value) => {
    const newValue = { ...this.state.value, [name]: value };
    this.setState({ value: newValue });
  }

  renderCheckbox = item => (
    <Checkbox
      {...item}
      key={item.name}
      checked={this.state.value[item.name]}
      onChange={value => this.onChange(item.name, value)}
    />
  );

  render() {
    return (
      <Container>
        <Items
          className={this.props.className}
          error={this.props.error}
          style={this.props.style}
        >
          {this.props.items.map(this.renderCheckbox)}
        </Items>
        <Error error={this.props.error}>{this.props.error}</Error>
      </Container>
    );
  }
}

ChceckboxGroup.propTypes = {
  className: PropTypes.string,
  error: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  style: PropTypes.object,
  value: PropTypes.object,
};

ChceckboxGroup.defaultProps = {
  className: '',
  error: '',
  style: {},
  value: {},
};

export default ChceckboxGroup;