import React from 'react'
import ChartColumn from './'

export default {
  title: 'ChartColumn',
  component: ChartColumn,
  args: {
    rows: [
      {
        value: 5,
        label: '5 keywords'
      },
      {
        value: 2,
        label: '2 keywords'
      },
      {
        value: 1,
        label: '1 keywords'
      },
      {
        value: 10,
        label: '10 keywords'
      }
    ]
  }
}

export const Base = (args) => <ChartColumn {...args} />
