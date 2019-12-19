import React from 'react'
import { storiesOf } from '@storybook/react'

import Tag from './'

storiesOf('Tag')
  .add('Default', () => (
    <figure><Tag>Default Tag</Tag></figure>
  ))
  .add('Invert', () => (
    <figure><Tag variant='invert'>Invert Tag</Tag></figure>
  ))
  .add('Success', () => (
    <figure><Tag variant='success'>Sucess Tag</Tag></figure>
  ))
  .add('Warning', () => (
    <figure><Tag variant='warning'>Warning Tag</Tag></figure>
  ))
  .add('Error', () => (
    <figure><Tag variant='error'>Error Tag</Tag></figure>
  ))
  .add('Pro', () => (
    <figure><Tag variant='pro'>Pro Tag</Tag></figure>
  ))
