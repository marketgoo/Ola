import React from 'react'
import { withInfo } from '@storybook/addon-info'
import { storiesOf } from '@storybook/react'

import { Tag } from '../src'

storiesOf('Tag', module)
  .addDecorator(withInfo)
  .addDecorator(story => <div className="ola">{story()}</div>)
  .add('Default', () => (
    <Tag>Default Tag</Tag>
  ))
  .add('Invert', () => (
    <Tag variant='invert'>Invert Tag</Tag>
  ))
  .add('Success', () => (
    <Tag variant='success'>Sucess Tag</Tag>
  ))
  .add('Warning', () => (
    <Tag variant='warning'>Warning Tag</Tag>
  ))
  .add('Error', () => (
    <Tag variant='error'>Error Tag</Tag>
  ))
  .add('Pro', () => (
    <Tag variant='pro'>Pro Tag</Tag>
  ))
