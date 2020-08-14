import React from 'react'
import ProgressBar from './'

export default {
  title: 'ProgressBar',
  component: ProgressBar,
  args: {
    children: 'Description',
    value: 50,
    max: 100
  }
}

export const Base = (args) => <ProgressBar {...args}>{args.children}</ProgressBar>
