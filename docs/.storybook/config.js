import { configure } from '@storybook/react';

function loadStories() {
  require('../stories/layout/Grid');
  require('../stories/general/Button');
  require('../stories/dataDisplay/Tooltip');
}

configure(loadStories, module);
