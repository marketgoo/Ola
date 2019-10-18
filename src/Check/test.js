import React from 'react'
import { Check } from './'
import renderer from 'react-test-renderer'

it('Default check is checkbox', () => {
  const tree = renderer
    .create(<Check>Accept terms</Check>)
    .toJSON()

  expect(tree).toMatchSnapshot()
})

it('Check type checkbox', () => {
  const tree = renderer
    .create(<Check type="checkbox">Accept terms</Check>)
    .toJSON()

  expect(tree).toMatchSnapshot()
})

it('Check type radio', () => {
  const tree = renderer
    .create(<Check type="radio">Accept terms</Check>)
    .toJSON()

  expect(tree).toMatchSnapshot()
})
