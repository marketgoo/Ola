import React, { useState } from 'react'
import Select from './'

const options = [
  { value: '', label: 'I\'m not sure' },
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
]

export default {
  title: 'Select',
  component: Select,
  args: {
    options,
    disabled: false,
    error: false,
    multiple: false
  },
  argTypes: {
    onClick: { action: 'clicked' },
    onChange: { action: 'changed' },
  }
}

export const Base = (args) => <Select {...args}/>

export const Multiple = (args) => {
  const [baseSelect, setBaseSelect] = useState([options[0]])

  return <Select value={baseSelect} {...args} onChange={setBaseSelect} />
}
Multiple.args = {
  multiple: true
}

export const Error = (args) => <Select {...args}/>
Error.args = {
  error: true
}

export const Disabled = (args) => <Select {...args}/>
Disabled.args = {
  disabled: true
}
