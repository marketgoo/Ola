import React from 'react'
import { withInfo } from '@storybook/addon-info'
import { storiesOf } from '@storybook/react'
import { withKnobs, radios } from '@storybook/addon-knobs'

import { Spinner } from '../src'

storiesOf('Spinner', module)
  .addDecorator(withKnobs)
  .addDecorator(withInfo)
  .addDecorator(story => <div className="ola preview-centered">{story()}</div>)
  .add('Default', () => (
    <Spinner size={radios('Size', ['small', 'medium', 'big'], 'big')} />
  ))
