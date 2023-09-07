import React from 'react'
import Toast from './'
import renderer from 'react-test-renderer'

it('Default Toast', () => {
  const tree = renderer.create(<Toast variant="neutral" title="This is the title" />).toJSON()
  expect(tree).toMatchSnapshot()
})