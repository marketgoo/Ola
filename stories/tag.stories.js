import React from 'react'
import { withInfo } from '@storybook/addon-info'
import { storiesOf } from '@storybook/react'

import { Tag } from '../src'

storiesOf('Tag', module)
  .addDecorator(withInfo)
  .addDecorator(story => <div className="ola preview-centered">{story()}</div>)
  .add('All', () => (
    <div className="preview-centered-inner">
      <Tag>Default Tag</Tag>
      <Tag variant='invert'>Invert Tag</Tag>
      <Tag variant='success'>Sucess Tag</Tag>
      <Tag variant='warning'>Warning Tag</Tag>
      <Tag variant='error'>Error Tag</Tag>
      <Tag variant='pro'>Pro Tag</Tag>
    </div>
  ))
