import React from 'react'
import ChartLine from './'
import ChartLineLabel from './Label'
import ChartLineAxis from './Axis'
import { getRanges } from '../utils'
import renderer from 'react-test-renderer'

const mockData = [
  {
    value: 5,
    label: '5 keywords',
  },
  {
    value: 2,
    label: '2 keywords',
  },
  {
    value: 1,
    label: '1 keywords',
  },
  {
    value: 10,
    label: '10 keywords',
  },
]

it('Default ChartLine', () => {
  const tree = renderer.create(<ChartLine>Test</ChartLine>).toJSON()
  expect(tree).toMatchSnapshot()
})

it('Default ChartLineLabel', () => {
  const tree = renderer.create(<ChartLineLabel></ChartLineLabel>).toJSON()
  expect(tree).toMatchSnapshot()
})

it('ChartLine and ChartLineLabel', () => {
  const ranges = getRanges(mockData.map((data) => data.value))
  const tree = renderer
    .create(
      <ChartLine ranges={ranges}>
        {mockData.map((row, idx) => (
          <ChartLineLabel key={idx} value={ranges[idx]}>
            {row.label}
          </ChartLineLabel>
        ))}
      </ChartLine>,
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('ChartLineAxis with max value zero', () => {
  const mockDataNull = [
    {
      value: null,
    },
    {
      value: null,
    },
    {
      value: null,
    },
    {
      value: 0,
    },
  ]
  const ranges = getRanges(mockDataNull.map((data) => data.value))
  const links = [null, null, null, 0]
  const maxValue = Math.max(...links)
  const tree = renderer
    .create(
      <ChartLine ranges={ranges}>
        <ChartLineAxis max={maxValue} />
        {mockDataNull.map((row, idx) => (
          <ChartLineLabel key={idx} value={ranges[idx]} />
        ))}
      </ChartLine>,
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
