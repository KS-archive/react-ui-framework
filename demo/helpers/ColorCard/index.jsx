import React from 'react';
import PropTypes from 'prop-types';
import { Card, Color, ColorText } from './styles';

const ColorCard = ({ colorName, colorValue }) => (
  <Card>
    <Color color={colorValue} />
    <ColorText>{colorName}</ColorText>
  </Card>
);

ColorCard.propTypes = {
  colorName: PropTypes.string.isRequired,
  colorValue: PropTypes.string.isRequired,
};

export default ColorCard;
