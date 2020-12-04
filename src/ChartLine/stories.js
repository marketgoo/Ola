import React from 'react'
import ChartLine from './'
import ChartLineLabel from './Label'
import { getRanges } from '../utils'

const mockData = [
  {
    value: 50,
    label: '50 keywords',
    color: 'green'
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

export default {
  title: 'ChartLine',
  component: ChartLine,
  args: {}
}

export const Base = () => {
  const ranges = getRanges(mockData.map( data => data.value ))

  return (
    <ChartLine values={ranges}>
      { mockData.map((row, idx) => 
        <ChartLineLabel key={idx} value={ranges[idx]}>{row.label}</ChartLineLabel>
      )}
    </ChartLine>
  )
}
 
export const HtmlLabels = () => {
  const ranges = getRanges(mockData.map( data => data.value ))

  return (
    <ChartLine values={ranges}>
      { mockData.map((row, idx) => 
        <ChartLineLabel key={idx} value={ranges[idx]}>
          <div><strong>{row.label}</strong><br />{row.label}</div>
        </ChartLineLabel>
      )}
    </ChartLine>
  )
}
