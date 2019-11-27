import React from 'react'
import { CheckArea } from './'
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
    label: <strong>Option 3</strong>,
    value: 3,
  }
]

it('Default checkarea', () => {
  const tree = renderer
    .create(<CheckArea name="test" options={options}></CheckArea>)
    .toJSON()

  expect(tree).toMatchSnapshot()
})

it('Checkarea type checkbox', () => {
  const tree = renderer
    .create(<CheckArea name="test" options={options} type="checkbox"></CheckArea>)
    .toJSON()

  expect(tree).toMatchSnapshot()
})

it('Checkarea type radio with value="2"', () => {
  const tree = renderer
    .create(<CheckArea name="test" options={options} type="checkbox" value="2"></CheckArea>)
    .toJSON()

  expect(tree).toMatchSnapshot()
})

it('Checkarea type radio with value=2', () => {
  const tree = renderer
    .create(<CheckArea name="test" options={options} type="checkbox" value={2}></CheckArea>)
    .toJSON()

  expect(tree).toMatchSnapshot()
})
