import React from 'react'
import Select from './'

export default {
  title: 'Select',
  component: Select,
  args: {
    options: [
      { value: '', label: 'I\'m not sure' },
      { value: 'chocolate', label: 'Chocolate' },
      { value: 'strawberry', label: 'Strawberry' },
      { value: 'vanilla', label: 'Vanilla' },
      { value: '', label: 'None' }
    ],
    disabled: false,
    error: false
  },
  argTypes: {
    onClick: { action: 'clicked' },
    onChange: { action: 'changed' },
  }
}

export const Base = (args) => <Select {...args}/>

export const Error = (args) => <Select {...args}/>
Error.args = {
  error: true
}

export const Disabled = (args) => <Select {...args}/>
Disabled.args = {
  disabled: true
}
