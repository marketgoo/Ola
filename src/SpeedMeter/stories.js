import React from 'react'
import SpeedMeter from '.'

export default {
  title: 'SpeedMeter',
  component: SpeedMeter,
  args: {
    breakpoint: 7,
    value: 12,
    unit: 'seconds',
    busy: '',
  }
}

export const Base = (args) => <SpeedMeter {...args}/>
