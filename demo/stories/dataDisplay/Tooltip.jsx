import React from 'react';
import { storiesOf } from '@storybook/react';
import { Index, Button, Tooltip } from 'react-ui-framework';

storiesOf('Data Display', module)
  .addDecorator(story => <Index><div style={{ padding: 32 }}>{story()}</div></Index>)
  .add('Tooltip', () => (
    <Tooltip title="I'm the default tooltip">
      <Button>Hover me</Button>
    </Tooltip>
  ));
