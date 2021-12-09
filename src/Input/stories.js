import React from 'react'
import Input from './'

export default {
  title: 'Input',
  component: Input,
  args: {
    disabled: false,
    readOnly: false,
  },
  argTypes: {
    onClick: { action: 'clicked' },
    onFocus: { action: 'focused' },
    onBlur: { action: 'blurred' },
    onInput: { action: 'input' },
  },
}

export const Base = (args) => <Input {...args} />
