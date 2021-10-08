import React from 'react'
import Thumbnail from './'

export default {
  title: 'Thumbnail',
  component: Thumbnail,
}

export const Base = () => <Thumbnail url="https://via.placeholder.com/100/000000" />
export const Border = (args) => (
  <div
    style={{
      display: 'grid',
      gap: '20px',
      'grid-auto-flow': 'column',
      'grid-auto-columns': '100px',
    }}
  >
    <Thumbnail
      {...args}
      borderColor={'#F48498'}
      url="https://via.placeholder.com/100/000000"
    />
    <Thumbnail
      {...args}
      borderColor={'#7FD8BE'}
      url="https://via.placeholder.com/100/000000"
    />
    <Thumbnail
      {...args}
      borderColor={'#FFD266'}
      url="https://via.placeholder.com/100/000000"
    />
    <Thumbnail
      {...args}
      borderColor={'#95B8D1'}
      url="https://via.placeholder.com/100/000000"
    />
  </div>
)

export const OnErrorWithErrorImage = (args) => (
  <Thumbnail {...args} url="https://estaurlnoexiste.it/100x100" errorImage="https://via.placeholder.com/100/000000" />
)

export const OnErrorWithoutErrorImage = (args) => (
  <Thumbnail {...args} url="https://estaurlnoexiste.it/100x100" />
)