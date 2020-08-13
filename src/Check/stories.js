import React from 'react'
import Check from './'

export default {
  title: 'Check',
  component: Check,
  args: {
    children: 'This is a check',
    checked: false
  }
}

export const Base = (args) => <Check {...args}>{args.children}</Check>
