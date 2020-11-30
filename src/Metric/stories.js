import React from 'react'
import Metric from './'

export default {
  title: 'Metric',
  component: Metric,
  args: {
    title: 'This is the title',
    description: 'This is the description',
    value: '299',
    footer: ''
  }
}

export const Base = (args) => <Metric {...args}/>
