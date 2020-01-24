import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Field from './'
import Input from '../Input'

storiesOf('Field')
  .add('Default', () => (
    <Field
      id="field-test"
      label="Test"
      description="Test description"
      hint="(optional)">
      <Input placeholder="Text placeholder" />
    </Field>
  ))
  .add('Error', () => (
    <Field
      id="field-error"
      error
      label="Test"
      description="Test description"
      hint="(optional)">
      <Input placeholder="Text placeholder" />
    </Field>
  ))
  .add('Disabled', () => (
    <Field
      id="field-disabled"
      disabled
      label="Test"
      description="Test description"
      hint="(optional)">
      <Input placeholder="Text placeholder" />
    </Field>
  ))
  .add('Description and hint with html', () => (
    <figure>
      <Field
        id="field-cutsom-description"
        label="Test"
        description={<>Test custom content with <a href="#" onClick={action('onClick event')}>link</a></>}
        hint={<strong>(optional)</strong>}>
        <Input placeholder="Text placeholder" />
      </Field>
    </figure>
  ))

