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
  ghost: PropTypes.bool,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  onClick: PropTypes.func,
  kind: PropTypes.oneOf(['primary', 'accent', 'white', 'info', 'success', 'error', 'warning']),
  className: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
};

Button.defaultProps = {
  ghost: false,
  type: 'button',
  onClick: () => {},
  kind: 'primary',
  className: '',
  size: 'md',
};

export default Button;
