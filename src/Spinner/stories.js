import React from 'react'
import { storiesOf } from '@storybook/react'
import { radios } from '@storybook/addon-knobs'

import Spinner from './'

storiesOf('Spinner')
  .add('Viewer', () => (
    <figure>
      <Spinner size={radios('Size', ['small', 'medium', 'big'], 'big')} />
    </figure>
  ))
