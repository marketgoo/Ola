import React from 'react'

import create from './create'
import { radios } from '@storybook/addon-knobs'

import { Spinner } from '../dist'

create('Spinner')
  .add('Default', () => (
    <Spinner size={radios('Size', ['small', 'medium', 'big'], 'big')} />
  ))
