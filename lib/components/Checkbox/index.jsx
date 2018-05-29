import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Container, Label, Input, Checkmark } from './styles';

class Checkbox extends PureComponent {
  static getDerivedStateFromProps(props, state) {
    return (props.checked !== state.checked) ? { checked: props.checked } : null;
  }

  state = {
    checked: this.props.checked,
  }

  onChange = () => {
    const checked = !this.state.checked;
    this.setState({ checked });
    this.props.onChange(checked);
  }

  render() {
    const { onChange, state: { checked }, props: { className, error, label, name, style } } = this;

    return (
      <Container className={className} error={error} onClick={onChange} style={style}>
        <Label>{label}</Label>
        <Input checked={checked} onChange={onChange} name={name} type="checkbox" />
        <Checkmark className="fa" />
        <div className="error">{error}</div>
      </Container>
    );
  }
}

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  checked: PropTypes.bool,
  error: PropTypes.string,
  onChange: PropTypes.func,
  style: PropTypes.object,
};

Checkbox.defaultProps = {
  checked: false,
  className: '',
  error: '',
  onChange: () => {},
  style: {},
};

export default Checkbox;
