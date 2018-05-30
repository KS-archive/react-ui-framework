import React, { PureComponent } from 'react';
import CheckboxBase from '../../../../components/Checkbox';

export default class Input extends PureComponent {
  static getDerivedStateFromProps(np, ps) {
    return (ps.value !== np.input.value) ? { value: np.input.value } : null;
  }

  state = {
    value: this.props.input.value,
  }

  change = value => this.props.input.onChange(value);

  render() {
    const {
      input, label, meta: { touched, error }, className, validating, style,
    } = this.props;
    console.log(this.props);

    return (
      <CheckboxBase
        className={className}
        onChange={this.change}
        label={label}
        name={input.name}
        checked={validating ? input.value : this.state.value}
        error={touched && error}
        style={style}
      />
    );
  }
}
