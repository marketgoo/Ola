import React from 'react'
import Button from './'

export default {
  title: 'Button',
  component: Button,
  args: {
    children: 'Button',
  },
  argTypes: {
    onClick: { action: 'clicked' },
    onFocus: { action: 'focused' },
    busy: { control: 'text' },
    as: {
      control: {
        type: 'inline-radio',
        options: ['button', 'a', 'span'],
      },
    },
  },
}

export const Base = (args) => <Button {...args}>{args.children}</Button>
export const WithOlaIcon = (args) => (
  <Button variant="secondary" icon="add" {...args}>
    {args.children}
  </Button>
)
export const WithIcon = (args) => (
  <Button
    variant="secondary"
    icon={<img src="https://placeholder.pics/svg/20" />}
    {...args}
  >
    {args.children}
  </Button>
)
