import React from 'react';
import PropTypes from 'prop-types';
import MDSpinner from 'react-md-spinner';

const sizes = {
  xs: 8,
  sm: 16,
  md: 32,
  lg: 48,
  xl: 64,
  xxl: 96,
};

const Spinner = ({ className, duration, size, style }) => (
  <MDSpinner
    className={className}
    duration={duration}
    size={sizes[size]}
    style={style}
    color1="var(--primary1)"
    color2="var(--primary2)"
    color3="var(--primary3)"
    color4="var(--primary2)"
  />
);

Spinner.propTypes = {
  className: PropTypes.string,
  duration: PropTypes.number,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl', 'xxl']),
  style: PropTypes.object,
};

Spinner.defaultProps = {
  className: '',
  duration: 1200,
  size: 'md',
  style: {},
};

export default Spinner;
