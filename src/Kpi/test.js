import React from 'react'
import Kpi from './'
import renderer from 'react-test-renderer'

it('Default Kpi', () => {
  const tree = renderer
    .create(<Kpi />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})