import React from 'react';
import PropTypes from 'prop-types';
import { styles } from '../../utils';
import { Card, Color, ColorText } from './styles';

const ColorCard = ({ color }) => {
  const colorValue = color.includes('var') ? styles.getValue(color) : color;
  return (
    <Card>
      <Color color={colorValue} />
      <ColorText>{colorValue}</ColorText>
    </Card>
  );
};

ColorCard.propTypes = {
  color: PropTypes.string.isRequired,
};

export default ColorCard;
