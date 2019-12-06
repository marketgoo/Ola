import React from 'react'
import { CheckGroup } from './'
import renderer from 'react-test-renderer'

const options = [
  {
    label: 'Option 1',
    value: 1,
  },
  {
    label: 'Option 2',
    value: 2,
  },
  {
    label: 'Option 3',
    value: 3,
  }
]

it('Default CheckGroup', () => {
  const tree = renderer
    .create(<CheckGroup options={options}></CheckGroup>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('Default CheckGroup option checked', () => {
  const tree = renderer
    .create(<CheckGroup value={options[0].value} options={options}></CheckGroup>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
