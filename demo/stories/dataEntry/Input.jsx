import React from 'react';
import { storiesOf } from '@storybook/react';
import { Index, Input } from 'react-ui-framework';

storiesOf('Data entry', module)
  .addDecorator(story => <Index>{story()}</Index>)
  .add('Input', () => (
    <div style={{ padding: 32 }}>
      <h1 style={{ marginBottom: 16 }}>Basic input</h1>
      <Input label="E-mail" />

      <h1 style={{ marginBottom: 16, marginTop: 32 }}>Error state</h1>
      <Input label="E-mail" error="Some error occured" pristine={false} />
    </div>
  ));
