import React from 'react'
import Icon from '../Icon'
import ButtonIcon from './'
import renderer from 'react-test-renderer'

it('Close Button icon', () => {
  const tree = renderer
    .create(
      <ButtonIcon>
        <Icon name="close" />
      </ButtonIcon>
    )
    .toJSON()

  expect(tree).toMatchSnapshot()
})
it('Destructive button icon', () => {
  const tree = renderer
    .create(
      <ButtonIcon variant="destructive">
        <Icon name="close" />
      </ButtonIcon>
    )
    .toJSON()

  expect(tree).toMatchSnapshot()
})
