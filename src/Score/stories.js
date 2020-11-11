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
  }
}

export const Base = (args) => <Score {...args}/>
