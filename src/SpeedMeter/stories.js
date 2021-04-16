import React from 'react'
import SpeedMeter from '.'

export default {
  title: 'SpeedMeter',
  component: SpeedMeter,
  args: {
    breakpoint: 7,
    value: 12,
    unit: 'seconds',
    min: 0,
    max: 14,
    busy: '',
    variant: ''
  }
}

export const Base = (args) => {
  const scoreLevel = (value, breakpoint) => {
    if (value < breakpoint - 1) {
      return 'success'
    }
    if (value > breakpoint) {
      return 'error'
    }
    return 'warning'
  }
  const variant = scoreLevel(args.value, args.breakpoint)
  return (<SpeedMeter {...args} variant={variant}/>)
}
