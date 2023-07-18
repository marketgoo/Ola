import React from 'react'
import ButtonIcon from './'
import renderer from 'react-test-renderer'

it('Default ButtonIcon', () => {
  const tree = renderer
    .create(
      <ButtonIcon icon="success" color="positive" />
    )
    .toJSON()

  expect(tree).toMatchSnapshot()
})
