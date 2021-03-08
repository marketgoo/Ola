import React from 'react'
import ChartLine from './'
import ChartLineLabel from './Label'
import ChartLineAxis from './Axis'
import Tooltip from '../Tooltip'
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
    value: null,
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
    value: null,
    label: 'no sites',
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
  args: {
    data: mockData,
    colors: colors
  }
}

export const Base = (args) => {
  const ranges = getRanges(args.data.map( data => data.value ))
  return (
    <ChartLine ranges={ranges} colors={args.colors} rule={args.rule}>
      { args.data.map((row, idx) => 
        <ChartLineLabel key={idx} value={ranges[idx]}>
          {row.label}
        </ChartLineLabel>
      )}
    </ChartLine>
  )
}

export const Multiple = (args) => {
  const ranges = getRanges(args.data.map( data => data.value ), mockData2.map( data => data.value ))
  return (
    <ChartLine ranges={ranges} colors={args.colors} rule={args.rule}>
      { args.data.map((row, idx) => 
        <ChartLineLabel key={idx} value={ranges[idx]} colors={args.colors}>
          <Tooltip trigger={<span>{row.label} <br/> from {mockData2[idx].label}</span>}>
            Content of this tooltip
          </Tooltip>
          
        </ChartLineLabel>
      )}
    </ChartLine>
  )
}

export const MultipleWithRuleAndAxis = (args) => {
  const ranges = getRanges(args.data.map( data => data.value ), mockData2.map( data => data.value ))

  return (
    <ChartLine ranges={ranges} colors={args.colors} rule={args.rule}>
      <ChartLineAxis max="100"/>
      { args.data.map((row, idx) => 
        <ChartLineLabel key={idx} value={ranges[idx]} colors={args.colors}>
          {row.label} <br/> from {mockData2[idx].label}
        </ChartLineLabel>
      )}
    </ChartLine>
  )
}

MultipleWithRuleAndAxis.args = {
  rule: {
    name: 'Average',
    value: 0.5
  }
}