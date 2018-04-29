import React from 'react';
import { storiesOf } from '@storybook/react';
import { Index, ColorCard } from 'react-ui-framework';

storiesOf('Layout', module)
  .addDecorator(story => <Index>{story()}</Index>)
  .add('Colors', () => (
    <div style={{ width: '100%', padding: 32 }}>
      <h1 style={{ marginBottom: 16 }}>Primary colors</h1>
      <div style={{ display: 'flex' }}>
        <ColorCard color="var(--primary1)" />
        <ColorCard color="var(--primary2)" />
        <ColorCard color="var(--primary3)" />
      </div>
      <h1 style={{ marginBottom: 16, marginTop: 32 }}>Accent colors</h1>
      <div style={{ display: 'flex' }}>
        <ColorCard color="var(--accent1)" />
        <ColorCard color="var(--accent2)" />
      </div>
      <h1 style={{ marginBottom: 16, marginTop: 32 }}>Greys</h1>
      <div style={{ display: 'flex' }}>
        <ColorCard color="var(--grey1)" />
        <ColorCard color="var(--grey2)" />
        <ColorCard color="var(--grey3)" />
      </div>
      <h1 style={{ marginBottom: 16, marginTop: 32 }}>Whites</h1>
      <div style={{ display: 'flex' }}>
        <ColorCard color="var(--white1)" />
        <ColorCard color="var(--white2)" />
        <ColorCard color="var(--white3)" />
      </div>
      <h1 style={{ marginBottom: 16, marginTop: 32 }}>Notifications</h1>
      <div style={{ display: 'flex' }}>
        <ColorCard color="var(--error)" />
        <ColorCard color="var(--warning)" />
        <ColorCard color="var(--success)" />
        <ColorCard color="var(--info)" />
      </div>
    </div>
  ));
