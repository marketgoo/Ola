import React from 'react'
import FieldDescription from './'
import renderer from 'react-test-renderer'

it('Default FieldDescription', () => {
  const tree = renderer
    .create(<FieldDescription>Description</FieldDescription>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('FieldDescription with error', () => {
  const tree = renderer
    .create(<FieldDescription error={true}>Description</FieldDescription>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
