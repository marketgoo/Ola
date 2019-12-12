import React from 'react'

import create from '../create'
import { action } from '@storybook/addon-actions'
import { text, boolean, radios } from '@storybook/addon-knobs'

import Check from './'

create('Check')
  .add('Default', () => (
    <div>
      <figure><Check>Check</Check></figure>
      <figure><Check>Check&nbsp;<a href="#">with a link</a></Check></figure>
      <figure><Check type="radio" name="name">Check Radio</Check></figure>
      <figure><Check type="radio" name="name">Check Radio&nbsp;<a href="#">with a link</a></Check></figure>
    </div>
  ))
  .add('Viewer', () => (
    <figure>
      <Check
        type={radios('Type', ['radio', 'checkbox'], 'radio')}
        disabled={boolean('Disabled', false)}
        onChange={action('onChange event')}
      >{ text('Label', 'Check') }
      </Check>
    </figure>
  ))

