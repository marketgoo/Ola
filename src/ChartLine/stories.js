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
    footer: 'January',
  },
  {
    value: 20,
    label: '20 keywords',
    footer: 'February',
  },
  {
    value: 0,
    label: '0 keywords',
    footer: 'March',
  },
  {
    value: 100,
    label: '100 keywords',
    footer: 'April',
  }
]

const mockData2 = [
  {
    value: 25,
  },
  {
    value: 35,
    label: '10 sites',
  },
  {
    value: 55,
    label: '0 sites',
  },
  {
    value: 80,
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
        <ChartLineLabel key={idx} value={ranges[idx]} footer={row.footer}>
          {row.label}
        </ChartLineLabel>
      )}
    </ChartLine>
  )
}

export const ZeroValues = (args) => {
  const ranges = getRanges(args.data)
  return (
    <ChartLine ranges={ranges} colors={args.colors} rule={args.rule}>
      { args.data.map((val, idx) => 
        <ChartLineLabel key={idx} value={ranges[idx]}>
          {val}
        </ChartLineLabel>
      )}
    </ChartLine>
  )
}
ZeroValues.args = {
  data: [0, 0, 0]
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
  const max = Math.max(...[...args.data.map( data => data.value ), ...mockData2.map( data => data.value )])
  const ranges = getRanges(args.data.map( data => data.value ), mockData2.map( data => data.value ))

  return (
    <ChartLine ranges={ranges} colors={args.colors} rule={args.rule}>
      <ChartLineAxis max={max}/>
      { args.data.map((row, idx) => 
        <ChartLineLabel key={idx} value={ranges[idx]} colors={args.colors}>
          {row.label} <br/> from {mockData2[idx].label}
        </ChartLineLabel>
      )}
    </ChartLine>
  )
}

export const WithTooltip = (args) => {
  const ranges = getRanges(args.data.map( data => data.value ), mockData2.map( data => data.value ))
  return (
    <ChartLine ranges={ranges} colors={args.colors} rule={args.rule}>
      { args.data.map((row, idx) => 
        <ChartLineLabel 
          key={idx} 
          value={ranges[idx]} 
          colors={args.colors} 
          footer={row.footer} 
          tooltip={<span>{`Visits ${args.data[idx].value}`}</span>} />
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