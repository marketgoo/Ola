import React from 'react'

import create from './create'
import { number, radios, boolean } from '@storybook/addon-knobs'

import { ProgressCircle } from '../dist'

create('Progress Circle')
  .add('Default', () => (
    <div>
      <ProgressCircle
        variant={radios('Variant', ['null', 'error', 'success', 'warning'])}
        value={number('Value', 20)}
        busy={boolean('Busy', false)} />
    </div>
  ))
