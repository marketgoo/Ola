import React from 'react'
import Device from './'

export default {
  title: 'Device',
  component: Device,
  args: {
    variant: '',
    url:'',
    busy: null
  }
}

export const Base = (args) => <Device  {...args}/>

