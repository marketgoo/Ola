import React from 'react'

import create from '../create'
import { number, radios, boolean } from '@storybook/addon-knobs'

import ProgressCircle from './'

create('ProgressCircle')
  .add('Viewer', () => (
    <figure>
      <ProgressCircle
        variant={radios('Variant', ['null', 'error', 'success', 'warning'])}
        value={number('Value', 20)}
        busy={boolean('Busy', false)} />
    </figure>
  ))
  