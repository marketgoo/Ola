import React from 'react'
import { withInfo } from '@storybook/addon-info'
import { storiesOf } from '@storybook/react'

import { Input, Checkbox } from '../src'

storiesOf('Form', module)
  .addDecorator(withInfo)
  .addDecorator(story => <div className="ola preview-centered">{story()}</div>)
  .add('All', () => (
    <div className="preview-centered">
      <p>Default: <Input placeholder="Text placeholder" /></p>
      <p>Disabled: <Input placeholder="Text placeholder" disabled /></p>
      <p>With value: <Input value="louis@gmail.com" /></p>
    </div>
  ))
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
  .add('Checkbox', () => (
    <div className="preview-centered">
      <p><Checkbox label="Checkbox" /></p>
      <p><Checkbox label="Checkbox <span> with span</span>" htmlLabel /></p>
    </div>
  ))
