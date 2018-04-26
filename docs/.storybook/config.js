import { configure } from '@storybook/react';

function loadStories() {
  require('../stories/Button');
  require('../stories/Grid');
}

configure(loadStories, module);
