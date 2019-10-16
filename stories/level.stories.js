import React from 'react'
import { withInfo } from '@storybook/addon-info'
import { storiesOf } from '@storybook/react'
import { withKnobs, radios } from '@storybook/addon-knobs'

import { Level } from '../dist'

storiesOf('Level', module)
  .addDecorator(withKnobs)
  .addDecorator(withInfo)
  .addDecorator(story => <div className="ola preview-centered">{story()}</div>)
  .add('Default', () => (
    <div className="preview-centered-inner">
      <Level />
      <Level variant={radios('Variant', ['low', 'medium', 'high'], 'medium')} />
    </div>
  ))
