import React from 'react'
import { withInfo } from '@storybook/addon-info'
import { storiesOf } from '@storybook/react'

import { Input, Field, Checkbox } from '../src'

storiesOf('Form', module)
  .addDecorator(withInfo)
  .addDecorator(story => <div className="ola preview-centered">{story()}</div>)
  .add('Input Empty', () => (
    <Input placeholder="Text placeholder" />
  ))
  .add('Input Empty Error', () => (
    <Input error={true} placeholder="Text placeholder" />
  ))
  .add('Input Empty disabled', () => (
    <Input placeholder="Text placeholder" disabled />
  ))
  .add('Input Filled', () => (
    <Input value="louis@gmail.com" />
  ))
  .add('Field', () => (
    <Field
      name="test"
      label="Test"
      description="Test description"
      hint="(optional)">
      <Input placeholder="Text placeholder" />
    </Field>
  ))
  .add('Field Error', () => (
    <Field
      error
      name="test"
      label="Test"
      description="Test description"
      hint="(optional)">
      <Input placeholder="Text placeholder" />
    </Field>
  ))
  .add('Field Disabled', () => (
    <Field
      disabled
      name="test"
      label="Test"
      description="Test description"
      hint="(optional)">
      <Input placeholder="Text placeholder" />
    </Field>
  ))
  .add('Checkbox', () => (
    <div className="preview-centered">
      <p><Checkbox label="Checkbox" /></p>
      <p><Checkbox label="Checkbox <span> with span</span>" htmlLabel /></p>
    </div>
  ))
