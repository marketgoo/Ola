import React from 'react'
import Thumbnail from './'
import renderer from 'react-test-renderer'

it('Default Thumbnail', () => {
  const tree = renderer.create(<Thumbnail src="https://placehold.it/100x100" errorImage="https://via.placeholder.com/100/000000" />).toJSON()
  expect(tree).toMatchSnapshot()
})

it('Default props', () => {
  const tree = renderer.create(<Thumbnail />).toJSON()
  expect(tree).toMatchSnapshot()
})