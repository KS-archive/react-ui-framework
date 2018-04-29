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

storiesOf('Layout', module)
  .addDecorator(story => <Index>{story()}</Index>)
  .add('Grid', () => (
    <div style={{ width: '100%', padding: 32 }}>
      <h1 style={{ marginBottom: 16 }}>Basic example</h1>
      <Grid>
        <GridItem xxl={1} xl={2} lg={3} md={4} sm={6} xs={12} style={{ ...style, backgroundColor: '#f44336' }}>1</GridItem>
        <GridItem xxl={1} xl={2} lg={3} md={4} sm={6} xs={12} style={{ ...style, backgroundColor: '#FF5722' }}>2</GridItem>
        <GridItem xxl={1} xl={2} lg={3} md={4} sm={6} xs={12} style={{ ...style, backgroundColor: '#FF9800' }}>3</GridItem>
        <GridItem xxl={1} xl={2} lg={3} md={4} sm={6} xs={12} style={{ ...style, backgroundColor: '#FFC107' }}>4</GridItem>
        <GridItem xxl={1} xl={2} lg={3} md={4} sm={6} xs={12} style={{ ...style, backgroundColor: '#FFEB3B' }}>5</GridItem>
        <GridItem xxl={1} xl={2} lg={3} md={4} sm={6} xs={12} style={{ ...style, backgroundColor: '#CDDC39' }}>6</GridItem>
        <GridItem xxl={1} xl={2} lg={3} md={4} sm={6} xs={12} style={{ ...style, backgroundColor: '#8BC34A' }}>7</GridItem>
        <GridItem xxl={1} xl={2} lg={3} md={4} sm={6} xs={12} style={{ ...style, backgroundColor: '#4CAF50' }}>8</GridItem>
        <GridItem xxl={1} xl={2} lg={3} md={4} sm={6} xs={12} style={{ ...style, backgroundColor: '#009688' }}>9</GridItem>
        <GridItem xxl={1} xl={2} lg={3} md={4} sm={6} xs={12} style={{ ...style, backgroundColor: '#00BCD4' }}>10</GridItem>
        <GridItem xxl={1} xl={2} lg={3} md={4} sm={6} xs={12} style={{ ...style, backgroundColor: '#03A9F4' }}>11</GridItem>
        <GridItem xxl={1} xl={2} lg={3} md={4} sm={6} xs={12} style={{ ...style, backgroundColor: '#2196F3' }}>12</GridItem>
      </Grid>
      <h1 style={{ marginBottom: 16, marginTop: 32 }}>Offset</h1>
      <Grid>
        <GridItem xs={1} xs-offset={11} style={{ ...style, backgroundColor: '#f44336' }}>1</GridItem>
        <GridItem xs={2} xs-offset={10} style={{ ...style, backgroundColor: '#FF5722' }}>2</GridItem>
        <GridItem xs={3} xs-offset={9} style={{ ...style, backgroundColor: '#FF9800' }}>3</GridItem>
        <GridItem xs={4} xs-offset={8} style={{ ...style, backgroundColor: '#FFC107' }}>4</GridItem>
        <GridItem xs={5} xs-offset={7} style={{ ...style, backgroundColor: '#FFEB3B' }}>5</GridItem>
        <GridItem xs={6} xs-offset={6} style={{ ...style, backgroundColor: '#CDDC39' }}>6</GridItem>
        <GridItem xs={7} xs-offset={5} style={{ ...style, backgroundColor: '#8BC34A' }}>7</GridItem>
        <GridItem xs={8} xs-offset={4} style={{ ...style, backgroundColor: '#4CAF50' }}>8</GridItem>
        <GridItem xs={9} xs-offset={3} style={{ ...style, backgroundColor: '#009688' }}>9</GridItem>
        <GridItem xs={10} xs-offset={2} style={{ ...style, backgroundColor: '#00BCD4' }}>10</GridItem>
        <GridItem xs={11} xs-offset={1} style={{ ...style, backgroundColor: '#03A9F4' }}>11</GridItem>
        <GridItem xs={12} style={{ ...style, backgroundColor: '#2196F3' }}>12</GridItem>
      </Grid>
    </div>
  ));
