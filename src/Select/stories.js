import React from 'react'
import { storiesOf } from '@storybook/react'

import Select from './'

storiesOf('Select')
  .add('Default', () => (
    <figure>
      <Select options={[
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
        { value: '', label: 'None' }
      ]} />
    </figure>
  ))
  .add('Empty option', () => (
    <figure>
      <Select emptyOption="Select yout flavor" options={[
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
        { value: '', label: 'None' }
      ]} />
    </figure>
  ))
  .add('Empty option with selected element', () => (
    <figure>
      <Select emptyOption="Select yout flavor" value="vanilla" options={[
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
        { value: '', label: 'None' }
      ]} />
    </figure>
  ))
