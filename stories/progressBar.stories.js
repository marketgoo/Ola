import React from 'react'
import { withInfo } from '@storybook/addon-info'
import { storiesOf } from '@storybook/react'

import { ProgressBar } from '../src'

storiesOf('Progress Bar', module)
  .addDecorator(withInfo)
  .addDecorator(story => <div className="ola preview-centered">{story()}</div>)
  .add('Progress element', () => (
    <div className="preview-centered-inner">
      <ProgressBar value="20" max="100" />
    </div>
  ))
  .add('Meter element', () => (
    <div className="preview-centered-inner">
      <ProgressBar as="meter" value="160" min="100" max="200" />
    </div>
  ))
