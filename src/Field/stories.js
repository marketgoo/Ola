import React from 'react'
import Field from './'
import Input from '../Input'

export default {
  title: 'Field',
  component: Field,
  args: {
    id: 'field-test',
    label: 'Label of the field',
    description: 'This is a description',
    hint: '(optional)',
  },
}

export const Base = (args) => <Field {...args}>
    <Input placeholder="Text placeholder" />
  </Field>

Base.argTypes = {
  children: { control: { disable: true }}
}