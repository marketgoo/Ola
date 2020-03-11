import React from 'react'
import { storiesOf } from '@storybook/react'

import Select from './'

const options = [
  { value: '', label: 'I’m not sure' },
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
  { value: '', label: 'None' }
]

storiesOf('Select')
  .add('Default', () => (
    <figure>
      <Select options={options} />
    </figure>
  ))
  .add('Option with defaulValue', () => (
    <figure>
      <Select defaultValue='strawberry' options={options} />
    </figure>
  ))
  .add('Option with value', () => (
    <figure>
      <Select value='vanilla' options={options} />
    </figure>
  ))
