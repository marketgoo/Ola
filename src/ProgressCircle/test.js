import React from 'react'
import ProgressCircle from './'
import renderer from 'react-test-renderer'

it('Default ProgressCircle', () => {
  const tree = renderer
    .create(<ProgressCircle />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('ProgressCircle with error variant', () => {
  const tree = renderer
    .create(<ProgressCircle variant="error" />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('ProgressCircle with success variant', () => {
  const tree = renderer
    .create(<ProgressCircle variant="success" />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('ProgressCircle with warning variant', () => {
  const tree = renderer
    .create(<ProgressCircle variant="warning" />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('ProgressCircle with value', () => {
  const tree = renderer
    .create(<ProgressCircle value={20} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('ProgressCircle Busy', () => {
  const tree = renderer
    .create(<ProgressCircle busy={true} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('ProgressCircle with extraClass', () => {
  const tree = renderer
    .create(<ProgressCircle extraClass='extraclass' />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
