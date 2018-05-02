import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import InputWrapper from './styles';

class Input extends PureComponent {
  static getDerivedStateFromProps(np, ps) {
    return (ps.value !== np.value) ? { value: np.value } : null;
  }

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

  handleChange = ({ target: { value } }) => {
    this.setState({ value, filled: value.length > 0 });
    this.props.onChange(value);
  }

  handleFocus = () => {
    this.setState({ focused: true });
    this.props.onFocus();
  }

  handleBlur = () => {
    this.setState({ focused: false, pristine: false });
    this.props.onBlur();
  }

  render() {
    const {
      handleBlur, handleFocus, handleChange,
      state: { focused, filled, value, pristine },
      props: { label, className, style, type, error },
    } = this;

    return (
      <InputWrapper focused={focused} filled={filled} error={error} pristine={pristine}>
        <div className="border">
          <div />
        </div>
        <label htmlFor={label}>{label}</label>
        <input
          name={label}
          className={className}
          style={style}
          type={type}
          value={value}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <div className="error">{error}</div>
      </InputWrapper>
    );
  }
}

Input.propTypes = {
  value: PropTypes.string,
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
  type: PropTypes.oneOf(['text', 'password', 'email', 'search', 'tel', 'url']),
  error: PropTypes.string,
  pristine: PropTypes.bool,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
};

Input.defaultProps = {
  value: '',
  className: '',
  style: {},
  type: 'text',
  error: '',
  pristine: true,
  onFocus: () => {},
  onBlur: () => {},
  onChange: () => {},
};

export default Input;
