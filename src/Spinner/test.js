import React from 'react'
import Spinner from './'
import renderer from 'react-test-renderer'

it('Default Spinner', () => {
  const tree = renderer
    .create(<Spinner  />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('Small Spinner', () => {
  const tree = renderer
    .create(<Spinner size="small" />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('Medium Spinner', () => {
  const tree = renderer
    .create(<Spinner size="medium" />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('Big Spinner', () => {
  const tree = renderer
    .create(<Spinner size="big" />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('Spinner with classNames', () => {
  const tree = renderer
    .create(<Spinner classNames="className" />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
