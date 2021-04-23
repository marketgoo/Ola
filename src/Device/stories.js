import React from 'react'
import Device from './'

export default {
  title: 'Device',
  component: Device,
  args: {
    variant: '',
    url:'https://www.adslzone.net/app/uploads-adslzone.net/2019/04/borrar-fondo-imagen.jpg'
  }
}

export const Base = (args) => <Device  {...args}/>

