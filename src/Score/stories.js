import React from 'react'
import Score from './'

export default {
  title: 'Score',
  component: Score,
  args: {
    value: 34,
    title: 'Your score',
    level: 'low',
    busy: '',
    backgroundColor: 'gray-xlight',
    supColor: 'gray-light'
  }
}

export const Base = (args) => <Score {...args}/>
