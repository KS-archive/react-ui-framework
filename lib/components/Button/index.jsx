import React from 'react';
import PropTypes from 'prop-types';
import { Ghost, Filled } from './styles';

const Button = ({ ghost, type, onClick, children, kind, className, size }) => {
  const Component = ghost ? Ghost : Filled;
  return (
    <Component
      type={type}
      onClick={onClick}
      kind={kind}
      className={className}
      size={size}
    >
      {children}
    </Component>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  ghost: PropTypes.bool,
  kind: PropTypes.oneOf(['primary', 'accent', 'white', 'info', 'success', 'error', 'warning']),
  onClick: PropTypes.func,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
};

Button.defaultProps = {
  className: '',
  ghost: false,
  kind: 'primary',
  onClick: () => {},
  size: 'md',
  type: 'button',
};

export default Button;
