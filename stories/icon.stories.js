import React from 'react'
import { withInfo } from '@storybook/addon-info'
import { storiesOf } from '@storybook/react'
import { withKnobs, select } from '@storybook/addon-knobs'

import { Icon } from '../dist'

storiesOf('Icon', module)
  .addDecorator(withKnobs)
  .addDecorator(withInfo)
  .addDecorator(story => <div className="ola preview-centered">{story()}</div>)
  .add('Default', () => (
    <div className="preview-centered-inner">
      <Icon name="help" />
      <Icon name="help" size="big" />
      <Icon name="help" size="medium" />
      <Icon name="help" size="small" />
    </div>
  ))
  .add('All', () => (
    <div className="preview-centered-inner">
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
