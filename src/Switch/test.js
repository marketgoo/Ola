import React from 'react'
import Switch from './'
import renderer from 'react-test-renderer'


it('Default Switch', () => {
  const tree = renderer
    .create(
      <Switch>Label text</Switch>
    )
    .toJSON()

  expect(tree).toMatchSnapshot()
})

it('Extra class Switch', () => {
  const tree = renderer
    .create(
      <Switch className="foo">Label text</Switch>
    )
    .toJSON()

  expect(tree).toMatchSnapshot()
})