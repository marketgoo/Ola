import React from 'react'
import Issue from './'
import renderer from 'react-test-renderer'

it('Default Issue', () => {
  const tree = renderer.create(<Issue title="Issue title 1"></Issue>).toJSON()

  expect(tree).toMatchSnapshot()
})

it('Success Issue', () => {
  const tree = renderer
    .create(<Issue title="Issue title 2" variant="success"></Issue>)
    .toJSON()

  expect(tree).toMatchSnapshot()
})

it('Suggested Issue', () => {
  const tree = renderer
    .create(<Issue title="Issue title 3" variant="suggested"></Issue>)
    .toJSON()

  expect(tree).toMatchSnapshot()
})

it('Warning Issue', () => {
  const tree = renderer
    .create(<Issue title="Issue title 4" variant="warning"></Issue>)
    .toJSON()

  expect(tree).toMatchSnapshot()
})

it('Error Issue', () => {
  const tree = renderer
    .create(<Issue title="Issue title 5" variant="error"></Issue>)
    .toJSON()

  expect(tree).toMatchSnapshot()
})
