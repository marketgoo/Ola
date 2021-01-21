import React from 'react'
import ChartLine from './'
import ChartLineLabel from './Label'
import { getRanges } from '../utils'

export default {
  title: 'ChartLine',
  component: ChartLine,
  args: {
    data: [
      {
        value: 50,
        label: '50 keywords',
      },
      {
        value: 20,
        label: '20 keywords',
      },
      {
        value: 0,
        label: '0 keywords',
      },
      {
        value: 100,
        label: '100 keywords',
      }
    ]
  }
}

export const Base = (args) => {
  const ranges = getRanges(args.data.map( data => data.value ))

  return (
    <ChartLine {...args} values={ranges}>
      { args.data.map((row, idx) => 
        <ChartLineLabel key={idx} value={ranges[idx]}>{row.label}</ChartLineLabel>
      )}
    </ChartLine>
  )
}
 
export const HtmlLabels = (args) => {
  const ranges = getRanges(args.data.map( data => data.value ))

  return (
    <ChartLine values={ranges}>
      { args.data.map((row, idx) => 
        <ChartLineLabel key={idx} value={ranges[idx]}>
          <div><strong>{row.label}</strong><br />{row.label}</div>
        </ChartLineLabel>
      )}
    </ChartLine>
  )
}
