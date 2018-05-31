import React, { PureComponent } from 'react';
import CheckboxGroupBase from '../../../../components/CheckboxGroup';

export default class CheckboxGroup extends PureComponent {
  change = value => this.props.input.onChange(value);

  render() {
    const {
      input, label, meta: { touched, error }, className, style, items,
    } = this.props;

    return (
      <CheckboxGroupBase
        className={className}
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
