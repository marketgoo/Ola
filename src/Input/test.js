import React from 'react'
import Input from './'
import renderer from 'react-test-renderer'

it('Default Input', () => {
  const tree = renderer
    .create(
      <Input placeholder="The placeholder" />
    )
    .toJSON()

  expect(tree).toMatchSnapshot()
})
