import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Checkbox from '../Checkbox';
import { Container, Label, Items, Error } from './styles';

class ChceckboxGroup extends PureComponent {
  static getDerivedStateFromProps(props, state) {
    return props.value !== state.value ? { value: { ...state.value, ...props.value } } : null;
  }

  constructor(props) {
    super(props);
    const value = props.items.reduce(
      (acc, item) => {
        acc[item.name] = acc[item.name] || false;
        return acc;
      },
      { ...props.value },
    );
    this.state = { value };
  }

  onChange = (name, value) => {
    const newValue = { ...this.state.value, [name]: value };
    this.setState({ value: newValue });
    this.props.onChange(newValue);
  };

  renderCheckbox = item => (
    <Checkbox
      {...item}
      key={item.name}
      error={!!this.props.error}
      checked={this.state.value[item.name]}
      onChange={value => this.onChange(item.name, value)}
    />
  );

  render() {
    const { className, error, items, label, style } = this.props;

    return (
      <Container style={style} className={className}>
        {label && <Label>{label}</Label>}
        <Items>{items.map(this.renderCheckbox)}</Items>
        <Error error={error}>{error}</Error>
      </Container>
    );
  }
}

ChceckboxGroup.propTypes = {
  className: PropTypes.string,
  error: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  style: PropTypes.object,
  value: PropTypes.object,
};

ChceckboxGroup.defaultProps = {
  className: '',
  error: '',
  label: '',
  onChange: () => {},
  style: {},
  value: {},
};

export default ChceckboxGroup;
