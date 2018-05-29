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
import CheckboxGroup from './CheckboxGroup';
import CheckboxGroupReadme from './CheckboxGroup/README.md';
import RadioGroup from './RadioGroup';
import RadioGroupReadme from './RadioGroup/README.md';

const stories = storiesOf('Data entry', module);

stories.addDecorator(withKnobs);
stories.addDecorator(story => <Index fa={__FONT_AWESOME__}>{story()}</Index>);
stories.add('Input', withReadme(InputReadme, props => <Input {...props} />));
stories.add('Select', withReadme(SelectReadme, props => <Select {...props} />));
stories.add('Checkbox', withReadme(CheckboxReadme, props => <Checkbox {...props} />));
stories.add('CheckboxGroup', withReadme(CheckboxGroupReadme, props => <CheckboxGroup {...props} />));
stories.add('RadioGroup', withReadme(RadioGroupReadme, props => <RadioGroup {...props} />));
