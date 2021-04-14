import React from 'react'
import SpeedMeter from '.'

export default {
  title: 'SpeedMeter',
  component: SpeedMeter,
  args: {
    breakpoint: 7,
    value: 34,
    title: 'Your SpeedMeter',
    level: 'low',
    busy: '',
  }
}

export const Base = (args) => <SpeedMeter {...args}/>
