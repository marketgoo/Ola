import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { text, boolean, radios, select } from '@storybook/addon-knobs'

import Button from './'

storiesOf('Button')
  .add('Viewer', () => (
    <Button
      onClick={action('onClick event')}
      disabled={boolean('Disabled', false)}
      busy={select('Busy', [false, 'Please, wait...'])}
      variant={radios('Variant', ['primary', 'secondary', 'destructive-primary', 'destructive', 'pro', 'link'])}
      icon={select('Icon', [
        undefined,
        'arrowUp',
        'arrowDown',
        'help',
        'chevronDown',
        'chevronUp',
        'chevronLeft',
        'chevronRight',
        'clock',
        'close',
        'error',
        'home',
        'newWindow',
        'null',
        'page',
        'plus',
        'search',
        'success',
        'user',
        'warning',
      ])}>
      {text('Label', 'Button')}
    </Button>
  ))
  .add('As links', () => (
    <div>
      <figure><Button href="#" variant="primary" target="_blank">Link</Button></figure>
      <figure><Button href="#" variant="primary" disabled>Link disabled</Button></figure>
      <figure><Button href="#" variant="primary" busy='Link busy ...' disabled>Hide text by busy text</Button></figure>
      <figure><Button href="#" variant="link" icon="newWindow">Link style</Button></figure>
    </div>
  ))
  .add('Busy', () => (
    <Button busy='Busy ...'>Example text button</Button>
  ))
  .add('Autofocus', () => (
    <Button type="button" autoFocus onClick={action('onClick event')}>Click here</Button>
  ))
