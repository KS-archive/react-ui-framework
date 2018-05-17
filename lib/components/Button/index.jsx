import React from 'react';
import PropTypes from 'prop-types';
import { Ghost, Filled } from './styles';

const Button = ({ ghost, type, onClick, children, kind, className, size, label }) => {
  const Component = ghost ? Ghost : Filled;
  return (
    <Component
      type={type}
      onClick={onClick}
      kind={kind}
      className={className}
      size={size}
    >
      {children || label}
    </Component>
  );
};

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  className: PropTypes.string,
  ghost: PropTypes.bool,
  kind: PropTypes.oneOf(['primary', 'accent', 'white', 'info', 'success', 'error', 'warning', 'grey']),
  label: PropTypes.string,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
};

Button.defaultProps = {
  children: '',
  className: '',
  ghost: false,
  kind: 'primary',
  label: '',
  onClick: () => {},
  size: 'md',
  type: 'button',
};

export default Button;
