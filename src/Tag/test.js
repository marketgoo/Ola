import React from 'react'
import Tag from './'
import renderer from 'react-test-renderer'

it('Default Tag', () => {
  const tree = renderer.create(<Tag>Test</Tag>).toJSON()
  expect(tree).toMatchSnapshot()
})

it('Tag with invert variant', () => {
  const tree = renderer.create(<Tag variant="invert">Test</Tag>).toJSON()
  expect(tree).toMatchSnapshot()
})

it('Tag with error variant', () => {
  const tree = renderer.create(<Tag variant="error">Test</Tag>).toJSON()
  expect(tree).toMatchSnapshot()
})

it('Tag with pro variant', () => {
  const tree = renderer.create(<Tag variant="pro">Test</Tag>).toJSON()
  expect(tree).toMatchSnapshot()
})

it('Tag with success variant', () => {
  const tree = renderer.create(<Tag variant="success">Test</Tag>).toJSON()
  expect(tree).toMatchSnapshot()
})

it('Tag with warning variant', () => {
  const tree = renderer.create(<Tag variant="warning">Test</Tag>).toJSON()
  expect(tree).toMatchSnapshot()
})

it('Tag with className', () => {
  const tree = renderer.create(<Tag className="className">Test</Tag>).toJSON()
  expect(tree).toMatchSnapshot()
})
