import React from 'react';
import PropTypes from 'prop-types';
import { Ghost, Filled } from './styles';

const Button = ({ ghost, type, onClick, children, kind, className }) => {
  const Component = ghost ? Ghost : Filled;
  return <Component type={type} onClick={onClick} kind={kind} className={className}>{children}</Component>;
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  ghost: PropTypes.bool,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  onClick: PropTypes.func,
  kind: PropTypes.oneOf(['primary', 'accent', 'white', 'info', 'success', 'error', 'warning']),
};

Button.defaultProps = {
  ghost: false,
  type: 'button',
  onClick: () => {},
  kind: 'primary',
};

export default Button;
