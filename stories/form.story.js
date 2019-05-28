import React from 'react'
import { withInfo } from '@storybook/addon-info'
import { storiesOf } from '@storybook/react'

import { Field } from '../src'
import { Checkbox } from '../src'

import { Panel } from '../src'
import { PanelHeader } from '../src'
import { PanelContent } from '../src'


storiesOf('Form', module)
  .addDecorator(withInfo)
  .addDecorator(story => <div className="ola preview-centered">{story()}</div>)
  .add('All', () => (
    <div className="preview-centered">
      <p>Default: <Field placeholder="Text placeholder" /></p>
      <p>Disabled: <Field placeholder="Text placeholder" disabled /></p>
      <p>With value: <Field value="louis@gmail.com" /></p>
    </div>
  ))
  .add('Field Empty', () => (
    <Field placeholder="Text placeholder" />
  ))
  .add('Field Empty Error', () => (
    <Field placeholder="Text placeholder" />
  ))
  .add('Field Empty disabled', () => (
    <Field placeholder="Text placeholder" disabled />
  ))
  .add('Field Filled', () => (
    <Field value="louis@gmail.com" />
  ))
  .add('Checkbox', () => (
    <Checkbox label="Checkbox" />
  ))
