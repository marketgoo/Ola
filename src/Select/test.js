import React from 'react'
import renderer from 'react-test-renderer'

import Select from './'

const testOptions = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
  { value: '', label: 'None' }
]

it('Default Page', () => {
  const tree = renderer
    .create(<Select options={testOptions} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('Default defaultValue', () => {
  const tree = renderer
    .create(<Select options={testOptions} defaultValue="strawberry" />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('Default with value', () => {
  const tree = renderer
    .create(<Select options={testOptions} value="vanilla" />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('Default with empty option', () => {
  const tree = renderer
    .create(<Select options={testOptions} emptyOption="Empty option" />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
