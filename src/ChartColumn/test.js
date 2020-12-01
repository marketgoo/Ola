import React from 'react'
import ChartColumn from './'
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

it('Default Kpi', () => {
  const tree = renderer
    .create(<ChartColumn rows={mockData} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})