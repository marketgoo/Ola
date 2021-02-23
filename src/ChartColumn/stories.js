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
    label: '100 keywords and a long text with multiple lines',
  }
]

export default {
  title: 'ChartColumn',
  component: ChartColumn,
  args: {}
}

export const Base = (args) => {
  const extractValues = mockData.map( data => data.value )
  return (
    <ChartColumn {...args}>
      { mockData.map((row, idx) => {
        const normalizedValue = normalizeRange(row.value, Math.max(...extractValues))
        return (
          <ChartColumnValue color={row.color} key={idx} value={normalizedValue}>{row.label}</ChartColumnValue>
        )
      })}
    </ChartColumn>
  )
}
 
export const HtmlLabels = (args) => {
  const extractValues = mockData.map( data => data.value )
  return (
    <ChartColumn {...args}>
      { mockData.map((row, idx) => {
        const normalizedValue = normalizeRange(row.value, Math.max(...extractValues), Math.min(...extractValues))
        return (
          <ChartColumnValue key={idx} value={normalizedValue}><div><strong>{row.label}</strong><br />{row.label}</div></ChartColumnValue>
        )
      })}
    </ChartColumn>
  )
}
 
export const WithRule = (args) => {
  const extractValues = mockData.map( data => data.value )
  return (
    <ChartColumn {...args}>
      { mockData.map((row, idx) => {
        const normalizedValue = normalizeRange(row.value, Math.max(...extractValues), Math.min(...extractValues))
        return (
          <ChartColumnValue key={idx} value={normalizedValue}><div><strong>{row.label}</strong><br />{row.label}</div></ChartColumnValue>
        )
      })}
    </ChartColumn>
  )
}
WithRule.args = {
  rule: {
    name: 'Average',
    value: 0.5
  }
}

export const ColumnsWithFooter = (args) => {
  const extractValues = mockData.map( data => data.value )
  const footer = ['one with a long text that may generate multiple lines', 'two', 'tree', 'four']

  return (
    <ChartColumn {...args}>
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

export const EmptyState = () => {
  return (
    <ChartColumn>
      <ChartColumnValue status="empty" footer="oi" value="0.1">he</ChartColumnValue>
      <ChartColumnValue status="empty" footer="oi" value="0.9">ha</ChartColumnValue>
      <ChartColumnValue status="empty" footer="oi" value="0.4">ho</ChartColumnValue>
    </ChartColumn>
  )
}

export const Loading = () => {
  return (
    <ChartColumn>
      <ChartColumnValue status="loading" footer="oi" value="0.1"></ChartColumnValue>
      <ChartColumnValue status="loading" footer="oi" value="0.9"></ChartColumnValue>
      <ChartColumnValue status="loading" footer="oi" value="0.4"></ChartColumnValue>
    </ChartColumn>
  )
}