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

it('Group with two buttons center', () => {
  const tree = renderer
    .create(
      <ButtonGroup variant="center">
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
      <ButtonGroup variant="reversed">
        <Button variant="primary">Main button</Button>
        <Button variant="secondary">Secondary button</Button>
      </ButtonGroup>
    )
    .toJSON()

  expect(tree).toMatchSnapshot()
})

it('Group with two buttons in reverse order centered', () => {
  const tree = renderer
    .create(
      <ButtonGroup variant="reversed-center">
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
      <ButtonGroup variant="reversed" extraClass="is-extra">
        <Button variant="primary">Main button</Button>
        <Button variant="secondary">Secondary button</Button>
      </ButtonGroup>
    )
    .toJSON()

  expect(tree).toMatchSnapshot()
})
