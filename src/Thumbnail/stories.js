import React from 'react'
import Thumbnail from './'

export default {
  title: 'Thumbnail',
  component: Thumbnail
}

export const Base = (args) => <Thumbnail {...args}/>
export const Border = (args) => <div style={{ display: 'grid', gap: '20px', 'grid-auto-flow': 'column', 'grid-auto-columns': '100px' }}>
  <Thumbnail {...args} borderColor={'#F48498'} url="https://placehold.it/100x100"/>
  <Thumbnail {...args} borderColor={'#7FD8BE'} url="https://placehold.it/100x100"/>
  <Thumbnail {...args} borderColor={'#FFD266'} url="https://placehold.it/100x100"/>
  <Thumbnail {...args} borderColor={'#95B8D1'} url="https://placehold.it/100x100"/>
</div>