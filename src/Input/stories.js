import React from 'react'
import Input from './'

export default {
  title: 'Input',
  component: Input,
  args: {
    disabled: false,
    readOnly: false
  }
}

export const Base = (args) => <Input {...args}/>
