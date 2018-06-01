import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Radio from './Radio';
import { Container, Label, Items, Error } from './styles';

class RadioGroup extends PureComponent {
  state = {
    value: this.props.value,
  };

  onChange = (name) => {
    if (this.state.value !== name) {
      this.setState({ value: name });
      this.props.onChange(name);
    }
  }

  render() {
    const {
      state: { value },
      props: { className, error, label, items, style },
    } = this;
    return (
      <Container style={style} className={className}>
        {label && <Label>{label}</Label>}
        <Items>
          {items.map(item => (
            <Radio
              key={item.name}
              error={!!error}
              onClick={() => this.onChange(item.name)}
              checked={value === item.name}
              {...item}
            />
          ))}
        </Items>
        <Error error={error}>{error}</Error>
      </Container>
    );
  }
}

RadioGroup.propTypes = {
  className: PropTypes.string,
  error: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  style: PropTypes.object,
  value: PropTypes.string,
};

RadioGroup.defaultProps = {
  className: '',
  error: '',
  label: '',
  onChange: () => { },
  style: {},
  value: '',
};

export default RadioGroup;
