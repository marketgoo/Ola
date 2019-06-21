import React from 'react'
import { withInfo } from '@storybook/addon-info'
import { storiesOf } from '@storybook/react'

import { ProgressCircle } from '../src'

storiesOf('Progress Circle', module)
  .addDecorator(withInfo)
  .addDecorator(story => <div className="ola preview-centered">{story()}</div>)
  .add('Default', () => (
    <div className="preview-centered-inner">
      <ProgressCircle value={20} />
    </div>
  ))
