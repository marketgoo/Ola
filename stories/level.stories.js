import React from 'react'
import create from './create'
import { radios } from '@storybook/addon-knobs'

import { Level } from '../dist'

create('Level')
  .add('Default', () => (
    <div>
      <figure><Level /></figure>
      <figure><Level variant={radios('Variant', ['low', 'medium', 'high'], 'medium')} /></figure>
    </div>
  ))
