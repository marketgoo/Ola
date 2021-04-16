import React from 'react'
import SpeedMeter from '.'
import renderer from 'react-test-renderer'

it('Default SpeedMeter', () => {
  const tree = renderer
    .create(<SpeedMeter />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('SpeedMeter with error variant', () => {
  const tree = renderer
    .create(<SpeedMeter variant="error" />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('SpeedMeter with success variant', () => {
  const tree = renderer
    .create(<SpeedMeter variant="success" />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('SpeedMeter with warning variant', () => {
  const tree = renderer
    .create(<SpeedMeter variant="warning" />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('SpeedMeter with value', () => {
  const tree = renderer
    .create(<SpeedMeter value={8} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('SpeedMeter Busy', () => {
  const tree = renderer
    .create(<SpeedMeter busy={true} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('SpeedMeter with extraClass', () => {
  const tree = renderer
    .create(<SpeedMeter className='test' />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('SpeedMeter with breakpoint and value', () => {
  const tree = renderer
    .create(<SpeedMeter breakpoint={7} value={6} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
