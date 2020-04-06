import React from 'react'
import Menu from './'
import Option from './Option'
import renderer from 'react-test-renderer'

it('Default Menu with Options', () => {
  const tree = renderer
    .create(
      <Menu>
        <Option>Option 1</Option>
        <Option>Option 2</Option>
      </Menu>
    )
    .toJSON()

  expect(tree).toMatchSnapshot()
})

it('Options are links', () => {
  const tree = renderer
    .create(
      <Menu>
        <Option href="link1">Option 1</Option>
        <Option href="link2">Option 2</Option>
      </Menu>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('Default Menu with separator items', () => {
  const tree = renderer
    .create(
      <Menu>
        <Option>Option 1</Option>
        <Option separator>Option 2</Option>
        <Option>Option 3</Option>
        <Option separator>Option 4</Option>
      </Menu>
    )
    .toJSON()

  expect(tree).toMatchSnapshot()
})
