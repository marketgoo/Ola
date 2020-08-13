import React from 'react'
import Switch from './'

export default {
  title: 'Switch',
  component: Switch,
  args: {
    children: 'Switch',
    checked: false,
  }
}

export const Base = (args) => <Switch {...args}>{args.children}</Switch>
