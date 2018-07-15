import { configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';

setOptions({
  name: 'React UI Framework',
  url: 'https://github.com/KonradSzwarc/react-ui-framework',
  addonPanelInRight: true,
});

function loadStories() {
  require('../stories/layout');
  require('../stories/general');
  require('../stories/dataEntry');
  require('../stories/dataDisplay');
  require('../stories/feedback');
  require('../stories/navigation');
  require('../stories/services');
}

configure(loadStories, module);
