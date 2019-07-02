import React from 'react'
import { withInfo } from '@storybook/addon-info'
import { storiesOf } from '@storybook/react'
import { withKnobs, number, radios, boolean } from '@storybook/addon-knobs'

import { ProgressCircle } from '../dist'

storiesOf('Progress Circle', module)
  .addDecorator(withInfo)
  .addDecorator(withKnobs)
  .addDecorator(story => <div className="ola preview-centered">{story()}</div>)
  .add('Default', () => (
    <div className="preview-centered-inner">
      <ProgressCircle
        variant={radios('Variant', ['null', 'error', 'success', 'warning'])}
        value={number('Value', 20)}
        busy={boolean('Busy', false)} />
    </div>
  ))
