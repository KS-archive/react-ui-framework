import React from 'react';
import { mount } from 'enzyme';
import Button from './index';

describe('Button', () => {
  it('Render Button component', () => {
    expect(
      mount(<Button />)
        .find('Button')
        .exists(),
    ).toBe(true);
  });

  it('Render text provided by label prop', () => {
    expect(
      mount(<Button label="abc" />)
        .find('button')
        .text(),
    ).toEqual('abc');
  });

  it('Render text provided as children', () => {
    expect(
      mount(<Button>abc</Button>)
        .find('button')
        .text(),
    ).toEqual('abc');
  });
});
