import React from 'react'
import ProgressBar from './'
import renderer from 'react-test-renderer'


it('Default ProgressBar', () => {
  const tree = renderer
    .create(
      <ProgressBar value="100" />
    )
    .toJSON()

  expect(tree).toMatchSnapshot()
})

it('ProgressBar with description', () => {
  const tree = renderer
    .create(
      <ProgressBar value="100">This is a <strong>description</strong></ProgressBar>
    )
    .toJSON()

  expect(tree).toMatchSnapshot()
})
