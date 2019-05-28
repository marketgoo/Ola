import React from 'react'
import { withInfo } from '@storybook/addon-info'
import { storiesOf } from '@storybook/react'

import { Spinner } from '../src'

storiesOf('Spinner', module)
  .addDecorator(withInfo)
  .add('Default', () => (
    <Spinner />
  ))
