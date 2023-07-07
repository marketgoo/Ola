import React from 'react'
import Input from './'
import Icon from '../Icon'

export default {
  title: 'Input',
  component: Input,
  args: {
    disabled: false,
    readOnly: false,
    error: false,
    placeholder: 'Text placeholder',
    className: '',
    type: 'text',
    value: '',
    icon: null
  },
  argTypes: {
    onClick: { action: 'clicked' },
    onFocus: { action: 'focused' },
    onBlur: { action: 'blurred' },
    onInput: { action: 'input' },
  },
}

export const InputBase = (args) => <Input {...args} />

export const InputNumber = (args) => <Input {...args} />
InputNumber.args = {
  type: 'number',
}

export const InputIcon = (args) => <Input {...args} />
InputIcon.args = {
  icon: <Icon name="copy" />,
}

export const InputError = (args) => <Input {...args} />
InputError.args = {
  error: true,
}

export const InputDisabled = (args) => <Input {...args} />
InputDisabled.args = {
  disabled: true,
  value: 'Input disabled'
}

export const InputReadOnly = (args) => <Input {...args} />
InputReadOnly.args = {
  readOnly: true,
  value: 'Input readonly'
}

export const TextareaBase = (args) => <Input {...args} />
TextareaBase.args = {
  placeholder: 'Textarea placeholder',
  type: 'textarea',
}

export const TextareaIcon = (args) => <Input {...args} />
TextareaIcon.args = {
  icon: <Icon name="copy" />,
  type: 'textarea',
}

export const TextareaError = (args) => <Input {...args} />
TextareaError.args = {
  placeholder: 'Textarea placeholder',
  type: 'textarea',
  error: true,
}

export const TextareaDisabled = (args) => <Input {...args} />
TextareaDisabled.args = {
  placeholder: 'Textarea placeholder',
  type: 'textarea',
  disabled: true,
  value: 'Textarea disabled'
}

export const TextareaReadOnly = (args) => <Input {...args} />
TextareaReadOnly.args = {
  placeholder: 'Textarea placeholder',
  type: 'textarea',
  readOnly: true,
  value: 'Textarea readonly'
}