import React from 'react'

import create from '../create'
import { radios } from '@storybook/addon-knobs'

import Level from './'

create('Level')
  .add('No value', () => (
    <figure><Level /></figure>
  ))
  .add('Viewer', () => (
    <figure><Level variant={radios('Variant', ['low', 'medium', 'high'], 'medium')} /></figure>
  ))
