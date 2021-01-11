import React from 'react'
import ChartLine from './'
import ChartLineLabel from './Label'
import { getRanges } from '../utils'

const mockData = [
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

const mockData2 = [
  {
    value: 23,
    label: '23 sites',
  },
  {
    value: 10,
    label: '10 sites',
  },
  {
    value: 0,
    label: '0 sites',
  },
  {
    value: 90,
    label: '90 sites',
  }
]

const colors = [
  'var(--brand)',
  'var(--error)',
  'pink',
  'var(--success)',
]

export default {
  title: 'ChartLine',
  component: ChartLine,
  args: {}
}

export const Base = () => {
  const ranges = getRanges(mockData.map( data => data.value ))
  return (
    <ChartLine ranges={ranges} colors={colors}>
      { mockData.map((row, idx) => 
        <ChartLineLabel key={idx} value={ranges[idx]}>
          {row.label}
        </ChartLineLabel>
      )}
    </ChartLine>
  )
}

export const Multiple = () => {
  const ranges = getRanges(mockData.map( data => data.value ), mockData2.map( data => data.value ))
  return (
    <ChartLine ranges={ranges} colors={colors}>
      { mockData.map((row, idx) => 
        <ChartLineLabel key={idx} value={ranges[idx]}>
          {row.label} <br/> from {mockData2[idx].label}
        </ChartLineLabel>
      )}
    </ChartLine>
  )
}

export const HtmlLabels = () => {
  const ranges = getRanges(mockData.map( data => data.value ))

  return (
    <ChartLine ranges={ranges}>
      { mockData.map((row, idx) => 
        <ChartLineLabel key={idx} value={ranges[idx]}>
          <div><strong>{row.label}</strong><br />{row.label}</div>
        </ChartLineLabel>
      )}
    </ChartLine>
  )
}
