import React from 'react'
import Select from './'

export default {
  title: 'Select',
  component: Select,
  args: {
    options: [
      { value: '', label: 'I’m not sure' },
      { value: 'chocolate', label: 'Chocolate' },
      { value: 'strawberry', label: 'Strawberry' },
      { value: 'vanilla', label: 'Vanilla' },
      { value: '', label: 'None' }
    ]
  }
}

export const Base = (args) => <Select {...args}/>
