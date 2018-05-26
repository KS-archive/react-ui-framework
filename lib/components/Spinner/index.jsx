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

const Spinner = ({ className, colors, duration, size, style }) => (
  <MDSpinner
    className={className}
    duration={duration}
    size={sizes[size]}
    style={style}
    color1={colors[0]}
    color2={colors[1] || colors[0]}
    color3={colors[2] || colors[1] || colors[0]}
    color4={colors[3] || colors[2] || colors[1] || colors[0]}
  />
);

Spinner.propTypes = {
  className: PropTypes.string,
  colors: PropTypes.arrayOf(PropTypes.string),
  duration: PropTypes.number,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl', 'xxl']),
  style: PropTypes.object,
};

Spinner.defaultProps = {
  className: '',
  colors: ['var(--primary1)', 'var(--primary2)', 'var(--primary3)', 'var(--primary2)'],
  duration: 1200,
  size: 'md',
  style: {},
};

export default Spinner;
