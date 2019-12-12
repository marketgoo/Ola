import React from 'react'
import { Level } from './'
import renderer from 'react-test-renderer'

it('Default Level', () => {
  const tree = renderer
    .create(<Level />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('Level Variant Low', () => {
  const tree = renderer
    .create(<Level variant={'low'} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('Level Variant Medium', () => {
  const tree = renderer
    .create(<Level variant={'medium'} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('Level Variant High', () => {
  const tree = renderer
    .create(<Level variant={'high'} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
