import React from 'react'
import Switch from './'

export default {
  title: 'Switch',
  component: Switch,
  args: {
    children: 'Switch',
    checked: false,
  },
  argTypes: {
    onClick: { action: 'clicked' },
    onChange: { action: 'changed' },
  }
}

export const Base = (args) => <Switch {...args}>{args.children}</Switch>
