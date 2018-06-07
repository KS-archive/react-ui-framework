import React, { PureComponent } from 'react';
import RadioGroupBase from '../../../../components/RadioGroup';

export default class RadioGroup extends PureComponent {
  change = value => this.props.input.onChange(value);

  render() {
    const {
      input, label, meta: { touched, error }, className, style, items,
    } = this.props;

    return (
      <RadioGroupBase
        onChange={this.change}
        items={items}
        label={label}
        name={input.name}
        value={input.value}
        error={touched && error}
        style={style}
      />
    );
  }
}
