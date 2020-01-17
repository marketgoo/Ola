import React from 'react'
import { storiesOf } from '@storybook/react'

import Switch from './'

storiesOf('Switch')
  .add('Default', () => (
    <figure>
      <Switch>Switch</Switch>
    </figure>
  ))
  .add('With link', () => (
    <figure>
      <Switch>
        Switch <a href='#'>with link</a>
      </Switch>
    </figure>
  ))
