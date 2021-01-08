import React from 'react'
import ChartLine from './'
import ChartLineLabel from './Label'
import { getRanges } from '../utils'
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

it('Default ChartLine', () => {
  const tree = renderer
    .create(<ChartLine>Test</ChartLine>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('Default ChartLineLabel', () => {
  const tree = renderer
    .create(<ChartLineLabel></ChartLineLabel>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('ChartLine and ChartLineLabel', () => {
  const ranges = getRanges(mockData.map(data => data.value))
  const tree = renderer
    .create(
      <ChartLine>
        { mockData.map((row, idx) => 
          <ChartLineLabel key={idx} value={ranges[idx]}>{row.label}</ChartLineLabel>
        )}
      </ChartLine>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})


