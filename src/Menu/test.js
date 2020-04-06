import React from 'react'
import Menu from './'
import Item from './Item'
import renderer from 'react-test-renderer'

it('Default Menu with Items', () => {
  const tree = renderer
    .create(
      <Menu>
        <Item>Item 1</Item>
        <Item>Item 2</Item>
      </Menu>
    )
    .toJSON()

  expect(tree).toMatchSnapshot()
})

it('Items are links', () => {
  const tree = renderer
    .create(
      <Menu>
        <Item href="link1">Item 1</Item>
        <Item href="link2">Item 2</Item>
      </Menu>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('Default Menu with separator items', () => {
  const tree = renderer
    .create(
      <Menu>
        <Item>Item 1</Item>
        <Item variant="separator">Item 2</Item>
        <Item>Item 3</Item>
        <Item variant="separator">Item 4</Item>
      </Menu>
    )
    .toJSON()

  expect(tree).toMatchSnapshot()
})
