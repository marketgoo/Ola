import React from 'react'
import { storiesOf } from '@storybook/react'
import { select } from '@storybook/addon-knobs'

import Icon from './'

storiesOf('Icon')
  .add('Sizes', () => (
    <figure>
      <Icon name="help" />
      <Icon name="help" size="big" />
      <Icon name="help" size="medium" />
      <Icon name="help" size="small" />
    </figure>
  ))
  .add('Viewer', () => (
    <figure>
      <Icon size={select('Size', ['medium', 'small', 'big'])} name={select('Name', [
        'help',
        'chevronDown',
        'chevronUp',
        'chevronLeft',
        'chevronRight',
        'clock',
        'close',
        'error',
        'home',
        'null',
        'page',
        'search',
        'success',
        'user',
        'warning'
      ])} />
    </figure>
  ))