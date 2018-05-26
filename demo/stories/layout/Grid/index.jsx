import React from 'react';
import { Grid, GridItem } from 'react-ui-framework';
import { boolean, number, text, object } from '@storybook/addon-knobs';
import { Container, Section, Header } from '../../../helpers/styles';

const style = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#fff',
  fontSize: 24,
  height: 48,
  backgroundColor: 'var(--primary2)'
};

const columns = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const gridGroup = 'Grid props';
const itemGroup = 'GridItem props';

export default () => (
  <Container>
    <Section>
      <Header>Grid</Header>
      <Grid
        className={text('className', 'gridClass', gridGroup)}
        dynamic={boolean('dynamic', false, gridGroup)}
        fluid={boolean('fluid', false, gridGroup)}
        style={object('style', {}, gridGroup)}
      >
        {columns.map(column => (
          <GridItem
            className={text('className', 'gridItemClass', itemGroup)}
            xxl={number('xxl', 1, itemGroup)}
            xl={number('xl', 2, itemGroup)}
            lg={number('lg', 3, itemGroup)}
            md={number('md', 4, itemGroup)}
            sm={number('sm', 6, itemGroup)}
            xs={number('xs', 12, itemGroup)}
            xxl-offset={number('xxl-offset', 0, itemGroup)}
            xl-offset={number('xl-offset', 0, itemGroup)}
            lg-offset={number('lg-offset', 0, itemGroup)}
            md-offset={number('md-offset', 0, itemGroup)}
            sm-offset={number('sm-offset', 0, itemGroup)}
            xs-offset={number('xs-offset', 0, itemGroup)}
            style={object('style', style, itemGroup)}
          >
            {column}
          </GridItem>
        ))}
      </Grid>
    </Section>
  </Container>
);
