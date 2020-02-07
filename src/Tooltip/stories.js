import React from 'react'
import { storiesOf } from '@storybook/react'

import Tooltip from './'
import Button from '../Button'

storiesOf('Tooltip')
  .add('Default', () => (
    <figure>
      <Tooltip trigger={<Button>Trigger</Button>}>Lorem ipsum</Tooltip>
    </figure>
  ))
