import React from 'react';
import { colors } from '../../utils';
import { Card, Color, ColorText } from './styles';

export default ({ color }) => {
  const colorValue = color.includes('var') ? colors.getValue(color) : color;
  return (
    <Card>
      <Color color={colorValue} />
      <ColorText>{colorValue}</ColorText>
    </Card>
  );
}
