import React from 'react'

import { withInfo } from '@storybook/addon-info'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import { ButtonIcon } from '../src'
import { Tag } from '../src'


storiesOf('ButtonIcon', module)
  .addDecorator(withInfo)
  .add('Default', () => (
    <Tag>
      Tag with ButtoIcon <ButtonIcon onClick={action('onClick event')}>x</ButtonIcon>
    </Tag>
  ))
