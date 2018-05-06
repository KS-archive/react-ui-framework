import React, { PureComponent } from 'react';
import { InputWrapper, StyledSelect } from './styles';

class Select extends PureComponent {
  constructor(props) {
    super(props);

    const { value, pristine } = this.props;

    this.state = {
      value,
      focused: false,
      filled: value && value.length > 0,
      pristine,
    };
  }

  handleFocus = () => {
    this.setState({ focused: true });
  }

  handleBlur = () => {
    this.setState({ focused: false, pristine: false });
  }

  handleChange = (option) => {
    const value = option ? option.value : null;
    this.setState({ value, filled: value && value.length > 0 });
    console.log(`Selected: ${value}`);
  }

  render() {
    const {
      handleBlur, handleFocus, handleChange,
      state: { focused, filled, value, pristine },
      props: { label, className, style, error },
    } = this;

    return (
      <InputWrapper focused={focused} filled={filled} error={error} pristine={pristine}>
        <div className="border">
          <div />
        </div>
        <label htmlFor={label}>{label}</label>
        <StyledSelect
          name={label}
          value={value}
          placeholder=""
          onChange={handleChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
          options={[
            { value: 'one', label: 'One' },
            { value: 'two', label: 'Two' },
          ]}
        />
        <div className="error">{error}</div>
      </InputWrapper>
    );
  }
}

export default Select;
