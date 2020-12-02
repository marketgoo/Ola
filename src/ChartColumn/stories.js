import React from 'react'
import ChartColumn from './'
import ChartColumnValue from './ChartColumnValue'
import { normalizeRange } from '../utils'

const mockData = [
  {
    value: 50,
    label: '50 keywords'
  },
  {
    value: 20,
    label: '20 keywords'
  },
  {
    value: 10,
    label: '10 keywords'
  },
  {
    value: 100,
    label: '100 keywords'
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
          <ChartColumnValue key={idx} value={normalizedValue}>{row.label}</ChartColumnValue>
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
          <ChartColumnValue key={idx} value={normalizedValue}><div><p>{row.label}</p><p>{row.label}</p></div></ChartColumnValue>
        )
      })}
    </ChartColumn>
  )
}

export const ColumnsWithFooter = () => {
  const extractValues = mockData.map( data => data.value )
  return (
    <ChartColumn>
      { mockData.map((row, idx) => {
        const normalizedValue = normalizeRange(row.value, Math.max(...extractValues), Math.min(...extractValues))
        const footer = ["one", "two", "tree", "four"]
        return (
          <ChartColumnValue 
            key={idx}
            footer={footer[idx]}
            value={normalizedValue}>
              <div><p>{row.label}</p><p>{row.label}</p></div>
          </ChartColumnValue>
        )
      })}
    </ChartColumn>
  )
}