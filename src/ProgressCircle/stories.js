import React from 'react'

import create from '../create'
import { number, radios, boolean } from '@storybook/addon-knobs'

import ProgressCircle from './'

create('ProgressCircle')
  .add('Label + value', () => (
    <figure>
      <ProgressCircle
        variant="warning"
        value="75"
        label="Your score" />
    </figure>
  ))
  .add('Viewer', () => (
    <figure>
      <ProgressCircle
        variant={radios('Variant', ['null', 'error', 'success', 'warning'])}
        value={number('Value', 20)}
        busy={boolean('Busy', false)} />
    </figure>
  ))
  