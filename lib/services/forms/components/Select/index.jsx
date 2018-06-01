import React, { PureComponent } from 'react';
import SelectBase from '../../../../components/Select';

export default class Select extends PureComponent {
  change = value => this.props.input.onChange(value);

  render() {
    const {
      input, label, meta: { touched, error }, className, style, items,
    } = this.props;

    return (
      <SelectBase
        className={className}
        onChange={this.change}
        label={label}
        name={input.name}
        items={items}
        value={input.value}
        error={touched && error}
        style={style}
      />
    );
  }
}
