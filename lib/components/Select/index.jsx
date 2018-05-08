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
  }

  handleBlur = () => {
    this.setState({ focused: false, pristine: false });
    this.props.onBlur();
  }

  handleChange = (option) => {
    const value = option ? option.value : null;
    this.setState({ value, filled: value && value.length > 0 });
    this.props.onChange(value);
  }

  render() {
    const {
      handleBlur, handleChange, handleFocus,
      state: { filled, focused, pristine, value },
      props: { autoBlur, autoFocus, className, clearable, error, label, options, searchable, style },
    } = this;

    return (
      <InputWrapper
        focused={focused}
        filled={filled}
        error={error}
        pristine={pristine}
        className={className}
        style={style}
      >
        <div className="border">
          <div />
        </div>
        <label htmlFor={label}>{label}</label>
        <StyledSelect
          autoBlur={autoBlur}
          autoFocus={autoFocus}
          clearable={clearable}
          name={label}
          value={value}
          placeholder=""
          onChange={handleChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
          options={options}
          searchable={searchable}
        />
        <div className="error">{error}</div>
      </InputWrapper>
    );
  }
}

Select.propTypes = {
  autoBlur: PropTypes.bool,
  autoFocus: PropTypes.bool,
  className: PropTypes.string,
  clearable: PropTypes.bool,
  error: PropTypes.string,
  label: PropTypes.string.isRequired,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  })),
  pristine: PropTypes.bool,
  searchable: PropTypes.bool,
  style: PropTypes.object,
  value: PropTypes.string,
};

Select.defaultProps = {
  autoBlur: true,
  autoFocus: false,
  className: '',
  clearable: true,
  error: '',
  onFocus: () => {},
  onBlur: () => {},
  onChange: () => {},
  options: [],
  pristine: true,
  searchable: false,
  style: {},
  value: '',
};

export default Select;
