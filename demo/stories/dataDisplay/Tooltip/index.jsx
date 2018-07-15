import React from 'react';
import styled from 'styled-components';
import { WithFigma } from 'storybook-addon-figma';
import { text, number, object, select, boolean } from '@storybook/addon-knobs';
import { Button, Tooltip } from 'react-ui-framework';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const animations = {
  shift: 'shift',
  perspective: 'perspective',
  fade: 'fade',
  scale: 'scale',
  none: 'none',
};

const positions = {
  top: 'top',
  bottom: 'bottom',
  right: 'right',
  left: 'left',
};

const sizes = {
  sm: 'sm',
  md: 'md',
  lg: 'lg',
};

const themes = {
  dark: 'dark',
  light: 'light',
  transparent: 'transparent',
};

export default () => (
  <WithFigma url="https://www.figma.com/file/UiPAHOSZM4nMLzzICmhlUHle/Data-display?node-id=1%3A19">
    <Container>
      <Tooltip
        title={text('title', "I'm the default tooltip")}
        animation={select('animation', animations, 'shift')}
        arrow={boolean('arrow', false)}
        arrowSize={select('arrowSize', sizes, 'md')}
        className={text('className', 'tooltip')}
        delay={number('delay', 0)}
        disabled={boolean('disabled', false)}
        distance={number('distance', 8)}
        duration={number('duration', 300)}
        hideDelay={number('hideDelay', 0)}
        hideOnClick={boolean('hideOnClick', true)}
        interactive={boolean('interactive', false)}
        offset={number('offset', 0)}
        position={select('position', positions, 'top')}
        size={select('size', sizes, 'md')}
        style={object('style', {})}
        theme={select('theme', themes, 'dark')}
        touchHold={boolean('touchHold', false)}
        trigger={text('trigger', 'mouseenter focus')}
      >
        <Button>Hover me</Button>
      </Tooltip>
    </Container>
  </WithFigma>
);
