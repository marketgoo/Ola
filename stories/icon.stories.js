import React from 'react'

import create from './create'
import { select } from '@storybook/addon-knobs'
import { Icon } from '../dist'

create('Icon')
  .add('Default', () => (
    <div>
      <Icon name="help" />
      <Icon name="help" size="big" />
      <Icon name="help" size="medium" />
      <Icon name="help" size="small" />
    </div>
  ))
  .add('All', () => (
    <div>
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
        'page',
        'search',
        'success',
        'user',
        'warning'
      ])} />
    </div>
  ))
