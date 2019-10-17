import React from 'react'
import { withInfo } from '@storybook/addon-info'
import { storiesOf } from '@storybook/react'

import { Tag } from '../dist'

storiesOf('Tag', module)
  .addDecorator(withInfo)
  .addDecorator(story => <div className="ola">{story()}</div>)
  .add('All', () => (
    <div>
      <figure><Tag>Default Tag</Tag></figure>
      <figure><Tag variant='invert'>Invert Tag</Tag></figure>
      <figure><Tag variant='success'>Sucess Tag</Tag></figure>
      <figure><Tag variant='warning'>Warning Tag</Tag></figure>
      <figure><Tag variant='error'>Error Tag</Tag></figure>
      <figure><Tag variant='pro'>Pro Tag</Tag></figure>
    </div>
  ))
