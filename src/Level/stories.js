import React from 'react'
import { storiesOf } from '@storybook/react'
import { radios } from '@storybook/addon-knobs'

import Level from './'

storiesOf('Level')
  .add('No value', () => (
    <figure><Level /></figure>
  ))
  .add('Viewer', () => (
    <figure><Level variant={radios('Variant', ['low', 'medium', 'high'], 'medium')} /></figure>
  ))
