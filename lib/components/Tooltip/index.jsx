import React from 'react';
import { Tooltip } from 'react-tippy';

export default props => (
  <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
    <Tooltip {...props}>
      {props.children}
    </Tooltip>
  </span>
);
