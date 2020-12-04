import React from 'react'
import ChartColumn from './'
import ChartColumnValue from './Column'
import { normalizeRange } from '../utils'

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
    value: 10,
    label: '10 keywords',
  },
  {
    value: 100,
    label: '100 keywords',
  }
]

export default {
  title: 'ChartColumn',
  component: ChartColumn,
  args: {}
}

export const Base = () => {
  const extractValues = mockData.map( data => data.value )
  return (
    <ChartColumn>
      { mockData.map((row, idx) => {
        const normalizedValue = normalizeRange(row.value, Math.max(...extractValues))
        return (
          <ChartColumnValue color={row.color} key={idx} value={normalizedValue}>{row.label}</ChartColumnValue>
        )
      })}
    </ChartColumn>
  )
}
 
export const HtmlLabels = () => {
  const extractValues = mockData.map( data => data.value )
  return (
    <ChartColumn>
      { mockData.map((row, idx) => {
        const normalizedValue = normalizeRange(row.value, Math.max(...extractValues), Math.min(...extractValues))
        return (
          <ChartColumnValue key={idx} value={normalizedValue}><div><strong>{row.label}</strong><br />{row.label}</div></ChartColumnValue>
        )
      })}
    </ChartColumn>
  )
}

export const ColumnsWithFooter = () => {
  const extractValues = mockData.map( data => data.value )
  const footer = ['one', 'two', 'tree', 'four']

  return (
    <ChartColumn>
      { mockData.map((row, idx) => {
        const normalizedValue = normalizeRange(row.value, Math.max(...extractValues))
        return (
          <ChartColumnValue 
            key={idx}
            footer={footer[idx]}
            value={normalizedValue}>
            <div><strong>{row.label}</strong><br />{row.label}</div>
          </ChartColumnValue>
        )
      })}
    </ChartColumn>
  )
}