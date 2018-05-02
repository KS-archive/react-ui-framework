import { configure } from '@storybook/react';

function loadStories() {
  require('../stories/layout/Colors');
  require('../stories/layout/Grid');
  require('../stories/general/Button');
  require('../stories/dataDisplay/Tooltip');
  require('../stories/dataEntry/Input');
  require('../stories/services/forms');
  require('../stories/services/notifications');
}

configure(loadStories, module);
