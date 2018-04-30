import React, { PureComponent } from 'react';
import InputBase from '../../../../components/Input';

export default class Input extends PureComponent {
  static getDerivedStateFromProps(np, ps) {
    return (ps.value !== np.input.value) ? { value: np.input.value } : null;
  }

  state = {
    value: this.props.input.value,
  }

  change = value => this.setState({ value });

  blur = () => {
    this.props.input.onChange(this.state.value);
    this.props.input.onBlur();
  }

  render() {
    const {
      input, label, meta: { touched, error }, className, validating, type,
    } = this.props;

    return (
      <InputBase
        className={className}
        onFocus={input.onFocus}
        onChange={this.change}
        onBlur={this.blur}
        label={label}
        value={validating ? input.value : this.state.value}
        type={type}
        error={touched && error}
      />
    );
  }
}
