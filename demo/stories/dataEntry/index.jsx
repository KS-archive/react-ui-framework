import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withReadme } from 'storybook-readme';
import { Index } from 'react-ui-framework';
import Input from './Input';
import InputReadme from './Input/README.md';
import Select from './Select';
import SelectReadme from './Select/README.md';
import Checkbox from './Checkbox';
import CheckboxReadme from './Checkbox/README.md';

const stories = storiesOf('Data entry', module);

stories.addDecorator(withKnobs);
stories.addDecorator(story => <Index>{story()}</Index>);
stories.add('Input', withReadme(InputReadme, props => <Input {...props} />));
stories.add('Select', withReadme(SelectReadme, props => <Select {...props} />));
stories.add('Checkbox', withReadme(CheckboxReadme, props => <Checkbox {...props} />));
