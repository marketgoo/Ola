import React from 'react'
import { storiesOf } from '@storybook/react'

import Switch from './'

storiesOf('Switch')
  .add('Default', () => (
    <figure><Switch label="Switch" /></figure>
  ))
  .add('With link', () => (
    <figure><Switch label="Switch&nbsp;<a href='#'>with link</a>" htmlLabel /></figure>
  ))
