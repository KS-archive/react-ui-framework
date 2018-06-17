import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
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
    this.props.onFocus();
  };

  handleBlur = () => {
    this.setState({ focused: false, pristine: false });
    this.props.onBlur();
  };

  handleChange = option => {
    const value = option ? option.value : null;
    this.setState({ value, filled: value && value.length > 0 });
    this.props.onChange(value);
  };

  render() {
    const {
      handleBlur,
      handleChange,
      handleFocus,
      state: { filled, focused, pristine, value },
      props: { className, isClearable, error, label, name, items, isSearchable, style },
    } = this;
    const selectValue = filled && items.filter(item => item.value === value)[0];

    return (
      <InputWrapper
        className={className}
        error={error}
        filled={filled}
        focused={focused}
        pristine={pristine}
        style={style}
      >
        <div className="border">
          <div />
        </div>
        <label htmlFor={label}>{label}</label>
        <StyledSelect
          classNamePrefix="ruf"
          isClearable={isClearable}
          name={name}
          onBlur={handleBlur}
          onChange={handleChange}
          onFocus={handleFocus}
          options={items}
          placeholder=""
          isSearchable={isSearchable}
          value={selectValue}
        />
        <div className="error">{error}</div>
      </InputWrapper>
    );
  }
}

Select.propTypes = {
  className: PropTypes.string,
  isClearable: PropTypes.bool,
  error: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    }),
  ),
  pristine: PropTypes.bool,
  isSearchable: PropTypes.bool,
  style: PropTypes.object,
  value: PropTypes.string,
};

Select.defaultProps = {
  className: '',
  isClearable: true,
  error: '',
  onFocus: () => {},
  onBlur: () => {},
  onChange: () => {},
  items: [],
  pristine: true,
  isSearchable: false,
  style: {},
  value: '',
};

export default Select;
