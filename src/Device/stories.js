import React from 'react'
import Device from './'

export default {
  title: 'Device',
  component: Device,
  args: {
    variant: '',
    url:'',
  },
  argTypes: {
    busy: { control: 'text'},
    
  }
}

export const Base = (args) => <Device  {...args}/>

