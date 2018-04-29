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
  backgroundColor: 'var(--primary2)',
};

storiesOf('Layout', module)
  .addDecorator(story => <Index>{story()}</Index>)
  .add('Grid', () => (
    <div style={{ width: '100%', padding: 32 }}>
      <h1 style={{ marginBottom: 16 }}>Basic example</h1>
      <Grid>
        <GridItem xxl={1} xl={2} lg={3} md={4} sm={6} xs={12} style={style}>1</GridItem>
        <GridItem xxl={1} xl={2} lg={3} md={4} sm={6} xs={12} style={style}>2</GridItem>
        <GridItem xxl={1} xl={2} lg={3} md={4} sm={6} xs={12} style={style}>3</GridItem>
        <GridItem xxl={1} xl={2} lg={3} md={4} sm={6} xs={12} style={style}>4</GridItem>
        <GridItem xxl={1} xl={2} lg={3} md={4} sm={6} xs={12} style={style}>5</GridItem>
        <GridItem xxl={1} xl={2} lg={3} md={4} sm={6} xs={12} style={style}>6</GridItem>
        <GridItem xxl={1} xl={2} lg={3} md={4} sm={6} xs={12} style={style}>7</GridItem>
        <GridItem xxl={1} xl={2} lg={3} md={4} sm={6} xs={12} style={style}>8</GridItem>
        <GridItem xxl={1} xl={2} lg={3} md={4} sm={6} xs={12} style={style}>9</GridItem>
        <GridItem xxl={1} xl={2} lg={3} md={4} sm={6} xs={12} style={style}>10</GridItem>
        <GridItem xxl={1} xl={2} lg={3} md={4} sm={6} xs={12} style={style}>11</GridItem>
        <GridItem xxl={1} xl={2} lg={3} md={4} sm={6} xs={12} style={style}>12</GridItem>
      </Grid>
      <h1 style={{ marginBottom: 16, marginTop: 32 }}>Fluid container</h1>
      <Grid fluid>
        <GridItem xxl={1} xl={2} lg={3} md={4} sm={6} xs={12} style={style}>1</GridItem>
        <GridItem xxl={1} xl={2} lg={3} md={4} sm={6} xs={12} style={style}>2</GridItem>
        <GridItem xxl={1} xl={2} lg={3} md={4} sm={6} xs={12} style={style}>3</GridItem>
        <GridItem xxl={1} xl={2} lg={3} md={4} sm={6} xs={12} style={style}>4</GridItem>
        <GridItem xxl={1} xl={2} lg={3} md={4} sm={6} xs={12} style={style}>5</GridItem>
        <GridItem xxl={1} xl={2} lg={3} md={4} sm={6} xs={12} style={style}>6</GridItem>
        <GridItem xxl={1} xl={2} lg={3} md={4} sm={6} xs={12} style={style}>7</GridItem>
        <GridItem xxl={1} xl={2} lg={3} md={4} sm={6} xs={12} style={style}>8</GridItem>
        <GridItem xxl={1} xl={2} lg={3} md={4} sm={6} xs={12} style={style}>9</GridItem>
        <GridItem xxl={1} xl={2} lg={3} md={4} sm={6} xs={12} style={style}>10</GridItem>
        <GridItem xxl={1} xl={2} lg={3} md={4} sm={6} xs={12} style={style}>11</GridItem>
        <GridItem xxl={1} xl={2} lg={3} md={4} sm={6} xs={12} style={style}>12</GridItem>
      </Grid>
      <h1 style={{ marginBottom: 16, marginTop: 32 }}>Offset</h1>
      <Grid>
        <GridItem xs={1} xs-offset={11} style={style}>1</GridItem>
        <GridItem xs={2} xs-offset={10} style={style}>2</GridItem>
        <GridItem xs={3} xs-offset={9} style={style}>3</GridItem>
        <GridItem xs={4} xs-offset={8} style={style}>4</GridItem>
        <GridItem xs={5} xs-offset={7} style={style}>5</GridItem>
        <GridItem xs={6} xs-offset={6} style={style}>6</GridItem>
        <GridItem xs={7} xs-offset={5} style={style}>7</GridItem>
        <GridItem xs={8} xs-offset={4} style={style}>8</GridItem>
        <GridItem xs={9} xs-offset={3} style={style}>9</GridItem>
        <GridItem xs={10} xs-offset={2} style={style}>10</GridItem>
        <GridItem xs={11} xs-offset={1} style={style}>11</GridItem>
        <GridItem xs={12} style={style}>12</GridItem>
      </Grid>
    </div>
  ));
