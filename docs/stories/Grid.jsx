import React from 'react';
import { storiesOf } from '@storybook/react';
import { Index, Grid, GridItem } from 'react-ui-framework';

const style = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#fff',
  fontSize: 24,
  height: 48,
};

storiesOf('Grid', module)
  .addDecorator(story => <Index>{story()}</Index>)
  .add('Grid container', () => (
    <div style={{ width: '100%', padding: 32 }}>
      <Grid>
        <GridItem item xxl={1} xl={2} lg={3} md={4} sm={6} xs={12} style={{ ...style, backgroundColor: '#f44336' }}>1</GridItem>
        <GridItem item xxl={1} xl={2} lg={3} md={4} sm={6} xs={12} style={{ ...style, backgroundColor: '#FF5722' }}>2</GridItem>
        <GridItem item xxl={1} xl={2} lg={3} md={4} sm={6} xs={12} style={{ ...style, backgroundColor: '#FF9800' }}>3</GridItem>
        <GridItem item xxl={1} xl={2} lg={3} md={4} sm={6} xs={12} style={{ ...style, backgroundColor: '#FFC107' }}>4</GridItem>
        <GridItem item xxl={1} xl={2} lg={3} md={4} sm={6} xs={12} style={{ ...style, backgroundColor: '#FFEB3B' }}>5</GridItem>
        <GridItem item xxl={1} xl={2} lg={3} md={4} sm={6} xs={12} style={{ ...style, backgroundColor: '#CDDC39' }}>6</GridItem>
        <GridItem item xxl={1} xl={2} lg={3} md={4} sm={6} xs={12} style={{ ...style, backgroundColor: '#8BC34A' }}>7</GridItem>
        <GridItem item xxl={1} xl={2} lg={3} md={4} sm={6} xs={12} style={{ ...style, backgroundColor: '#4CAF50' }}>8</GridItem>
        <GridItem item xxl={1} xl={2} lg={3} md={4} sm={6} xs={12} style={{ ...style, backgroundColor: '#009688' }}>9</GridItem>
        <GridItem item xxl={1} xl={2} lg={3} md={4} sm={6} xs={12} style={{ ...style, backgroundColor: '#00BCD4' }}>10</GridItem>
        <GridItem item xxl={1} xl={2} lg={3} md={4} sm={6} xs={12} style={{ ...style, backgroundColor: '#03A9F4' }}>11</GridItem>
        <GridItem item xxl={1} xl={2} lg={3} md={4} sm={6} xs={12} style={{ ...style, backgroundColor: '#2196F3' }}>12</GridItem>
      </Grid>
    </div>
  ));
