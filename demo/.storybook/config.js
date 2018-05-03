import { configure } from '@storybook/react';

function loadStories() {
  require('../stories/layout');
  require('../stories/general');
  require('../stories/dataEntry');
  require('../stories/dataDisplay');
  require('../stories/services');
}

configure(loadStories, module);
