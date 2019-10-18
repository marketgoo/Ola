import React from 'react'
import { Button } from '../Button'
import { ButtonGroup } from './'
import renderer from 'react-test-renderer'

it('Group with two buttons', () => {
  const tree = renderer
    .create(
      <ButtonGroup>
        <Button variant="primary">Main button</Button>
        <Button variant="secondary">Secondary button</Button>
      </ButtonGroup>
    )
    .toJSON()

  expect(tree).toMatchSnapshot()
})

it('Group with two buttons in reverse order', () => {
  const tree = renderer
    .create(
      <ButtonGroup reversed>
        <Button variant="primary">Main button</Button>
        <Button variant="secondary">Secondary button</Button>
      </ButtonGroup>
    )
    .toJSON()

  expect(tree).toMatchSnapshot()
})

it('Group with two buttons in reverse order and extra class', () => {
  const tree = renderer
    .create(
      <ButtonGroup reversed extraClass="is-extra">
        <Button variant="primary">Main button</Button>
        <Button variant="secondary">Secondary button</Button>
      </ButtonGroup>
    )
    .toJSON()

  expect(tree).toMatchSnapshot()
})
