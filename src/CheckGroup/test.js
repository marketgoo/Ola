import React from 'react'
import renderer from 'react-test-renderer'
import CheckGroup from './'
import Check from '../Check'

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

it('Default checkGroup', () => {
  const tree = renderer
    .create(
      <CheckGroup>
        { options.map((option, key) => <Check key={key} variant="area" value={option.value}>{option.label}</Check>)}
      </CheckGroup>
    )
    .toJSON()

  expect(tree).toMatchSnapshot()
})

it('Checkgroup in columns', () => {
  const tree = renderer
    .create(
      <CheckGroup variant="column">
        { options.map((option, key) => <Check key={key} variant="area" value={option.value}>{option.label}</Check>)}
      </CheckGroup>
    )
    .toJSON()

  expect(tree).toMatchSnapshot()
})

it('Checkgroup in list', () => {
  const tree = renderer
    .create(
      <CheckGroup variant="list">
        { options.map((option, key) => <Check key={key} variant="option" value={option.value}>{option.label}</Check>)}
      </CheckGroup>
    )
    .toJSON()

  expect(tree).toMatchSnapshot()
})
