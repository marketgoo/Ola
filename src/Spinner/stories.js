import React from 'react'

import create from '../create'
import { radios } from '@storybook/addon-knobs'

import Spinner from './'

create('Spinner')
  .add('Viewer', () => (
    <figure>
      <Spinner size={radios('Size', ['small', 'medium', 'big'], 'big')} />
    </figure>
  ))
