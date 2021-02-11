import React from 'react'
import Thumbnail from './'

export default {
  title: 'Thumbnail',
}

export const Base = (args) => <Thumbnail {...args} url="https://placehold.it/100x100"/>
export const Border = (args) => <div style={{ display: 'flex' }}>
  <Thumbnail {...args} borderColor={'#F48498'} url="https://placehold.it/100x100"/>
  <Thumbnail {...args} borderColor={'#7FD8BE'} url="https://placehold.it/100x100"/>
  <Thumbnail {...args} borderColor={'#FFD266'} url="https://placehold.it/100x100"/>
  <Thumbnail {...args} borderColor={'#95B8D1'} url="https://placehold.it/100x100"/>
</div>