import React from 'react'
import Button from '../Button'
import Segment from './'
import renderer from 'react-test-renderer'

it('Segment with two buttons', () => {
  const tree = renderer
    .create(
      <Segment>
        <Button variant="secondary">Main button</Button>
        <Button variant="secondary">Secondary button</Button>
      </Segment>
    )
    .toJSON()

  expect(tree).toMatchSnapshot()
})

it('Segment with two buttons and an extra class and one button pressed', () => {
  const tree = renderer
    .create(
      <Segment className="extra-class">
        <Button variant="secondary" selected>Main button</Button>
        <Button variant="secondary">Secondary button</Button>
      </Segment>
    )
    .toJSON()

  expect(tree).toMatchSnapshot()
})
