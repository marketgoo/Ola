import React from 'react'

import create from '../create'
import { action } from '@storybook/addon-actions'
import { text, boolean, radios, select } from '@storybook/addon-knobs'

import Button from './'

create('Button')
  .add('Viewer', () => (
    <Button
      onClick={action('onClick event')}
      disabled={boolean('Disabled', false)}
      busy={select('Busy', [false, 'Please, wait...'])}
      variant={radios('Variant', ['primary', 'secondary', 'destructive-primary', 'destructive', 'pro', 'link'])}>
      { text('Label', 'Button') }
    </Button>
  ))
  .add('As links', () => (
    <div>
      <figure><Button href="#" variant="primary" target="_blank">Link</Button></figure>
      <figure><Button href="#" variant="primary" disabled>Link disabled</Button></figure>
      <figure><Button href="#" variant="primary" busy='Link busy ...' disabled>Hide text by busy text</Button></figure>
      <figure><Button href="#" variant="link">Link style</Button></figure>
    </div>
  ))
  .add('Busy', () => (
    <Button busy='Busy ...'>Example text button</Button>
  ))
