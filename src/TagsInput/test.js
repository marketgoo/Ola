import React from 'react'
import TagsInput from './TagsInput'
import renderer from 'react-test-renderer'

it('Default TagsInput', () => {
  const tree = renderer.create(<TagsInput />).toJSON()
  expect(tree).toMatchSnapshot()
})
