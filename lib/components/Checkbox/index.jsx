import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Container, Label, Input, Checkmark, Error } from './styles';

class Checkbox extends PureComponent {
  static getDerivedStateFromProps(props, state) {
    if (props.checked !== state.checked) {
      return { checked: props.checked };
    }
    return null;
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
    return (
      <Container
        className={this.props.className}
        error={this.props.error}
        style={this.props.style}
      >
        <Label>{this.props.label}</Label>
        <Input
          checked={this.state.checked}
          onChange={this.onChange}
          type="checkbox"
        />
        <Checkmark
          className="fa"
          onClick={this.onChange}
        />
        <div className="error">{this.props.error}</div>
      </Container>
    );
  }
}

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
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
