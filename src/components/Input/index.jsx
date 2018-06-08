import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import InputWrapper from './styles';

class Input extends PureComponent {
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

  static getDerivedStateFromProps(np, ps) {
    return ps.value !== np.value ? { value: np.value } : null;
  }

  handleChange = ({ target: { value } }) => {
    this.setState({ value, filled: value.length > 0 });
    this.props.onChange(value);
  };

  handleFocus = () => {
    this.setState({ focused: true });
    this.props.onFocus();
  };

  handleBlur = () => {
    this.setState({ focused: false, pristine: false });
    this.props.onBlur();
  };

  render() {
    const {
      handleBlur,
      handleChange,
      handleFocus,
      state: { filled, focused, pristine, value },
      props: { className, error, label, name, style, type },
    } = this;

    return (
      <InputWrapper error={error} filled={filled} focused={focused} pristine={pristine}>
        <div className="border">
          <div />
        </div>
        <label htmlFor={label}>{label}</label>
        <input
          name={name}
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
  className: PropTypes.string,
  error: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  pristine: PropTypes.bool,
  style: PropTypes.object,
  type: PropTypes.oneOf(['text', 'password', 'email', 'search', 'tel', 'url']),
  value: PropTypes.string,
};

Input.defaultProps = {
  className: '',
  error: '',
  label: '',
  onBlur: () => {},
  onChange: () => {},
  onFocus: () => {},
  pristine: true,
  style: {},
  type: 'text',
  value: '',
};

export default Input;
