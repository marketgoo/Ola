import React from 'react'
import { storiesOf } from '@storybook/react'

import Tooltip from './'
import Button from '../Button'
import Icon from '../Icon'
import ButtonIcon from '../ButtonIcon'

storiesOf('Tooltip')
  .add('Default', () => (
    <figure>
      <Tooltip trigger={<p>Click for show content</p>}>Content</Tooltip>
    </figure>
  ))
  .add('With Button', () => (
    <figure>
      <Tooltip trigger={<Button as="span" variant="primary">Trigger as span</Button>}>Lorem ipsum</Tooltip>
    </figure>
  ))
  .add('With ButtonIcon', () => (
    <figure>
      <Tooltip trigger={<ButtonIcon as="span"><Icon name="help" /></ButtonIcon>}>Lorem ipsum</Tooltip>
    </figure>
  ))
