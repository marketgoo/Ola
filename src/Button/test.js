import React from 'react'
import Button from './'
import renderer from 'react-test-renderer'

it('No variant button', () => {
  const tree = renderer.create(<Button>Click here</Button>).toJSON()

  expect(tree).toMatchSnapshot()
})

it('Primary button', () => {
  const tree = renderer
    .create(<Button variant="primary">Click here</Button>)
    .toJSON()

  expect(tree).toMatchSnapshot()
})

it('Secondary button', () => {
  const tree = renderer
    .create(<Button variant="secondary">Click here</Button>)
    .toJSON()

  expect(tree).toMatchSnapshot()
})

it('PRO button', () => {
  const tree = renderer
    .create(<Button variant="pro">Click here</Button>)
    .toJSON()

  expect(tree).toMatchSnapshot()
})

it('Primary destructive button', () => {
  const tree = renderer
    .create(<Button variant="destructive-primary">Click here</Button>)
    .toJSON()

  expect(tree).toMatchSnapshot()
})

it('Destructive button', () => {
  const tree = renderer
    .create(<Button variant="destructive">Click here</Button>)
    .toJSON()

  expect(tree).toMatchSnapshot()
})

it('Busy button', () => {
  const tree = renderer
    .create(
      <Button variant="primary" busy>
        Click here
      </Button>
    )
    .toJSON()

  expect(tree).toMatchSnapshot()
})

it('Primary button with extra class', () => {
  const tree = renderer
    .create(
      <Button variant="primary" className="is-extra">
        Click here
      </Button>
    )
    .toJSON()

  expect(tree).toMatchSnapshot()
})

it('Disabled primary button', () => {
  const tree = renderer
    .create(
      <Button variant="primary" disabled>
        Click here
      </Button>
    )
    .toJSON()

  expect(tree).toMatchSnapshot()
})

it('Disabled link button', () => {
  const tree = renderer
    .create(
      <Button variant="link" disabled>
        Click here
      </Button>
    )
    .toJSON()

  expect(tree).toMatchSnapshot()
})

it('Icon button', () => {
  const tree = renderer
    .create(
      <Button
        variant="secondary"
        icon={<img src="https://placeholder.pics/svg/20" />}
      >
        Click here
      </Button>
    )
    .toJSON()

  expect(tree).toMatchSnapshot()
})

it('Ola icon button', () => {
  const tree = renderer
    .create(
      <Button variant="secondary" icon="add">
        Click here
      </Button>
    )
    .toJSON()

  expect(tree).toMatchSnapshot()
})
