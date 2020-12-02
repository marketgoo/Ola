import React from 'react'
import ChartColumn from './'
import ChartColumnValue from './ChartColumnValue'
import { normalizeRange } from '../utils'
import renderer from 'react-test-renderer'

const mockData = [
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

it('Default ChartColumn', () => {
  const tree = renderer
    .create(<ChartColumn>Test</ChartColumn>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('Default ChartColumnValue', () => {
  const tree = renderer
    .create(<ChartColumnValue></ChartColumnValue>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('ChartColumn and ChartColumnValue', () => {
  const extractValues = mockData.map( data => data.value )
  const tree = renderer
    .create(
      <ChartColumn>
        { mockData.map((row, idx) => {
          const normalizedValue = normalizeRange(row.value, Math.max(...extractValues), Math.min(...extractValues))
          return (
            <ChartColumnValue key={idx} value={normalizedValue}>{row.label}</ChartColumnValue>
          )
        })}
      </ChartColumn>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})


