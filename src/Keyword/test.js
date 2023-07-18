import React from 'react'
import Keyword from './'
import ButtonIcon from '../ButtonIcon'
import Icon from '../Icon'
import renderer from 'react-test-renderer'

it('Default Keyword', () => {
  const tree = renderer.create(<Keyword>Test</Keyword>).toJSON()
  expect(tree).toMatchSnapshot()
})

it('Keyword with extraClass', () => {
  const tree = renderer.create(<Keyword className="test">Test</Keyword>).toJSON()
  expect(tree).toMatchSnapshot()
})

it('Keyword with button', () => {
  const tree = renderer.create(<Keyword className="test" button={<ButtonIcon icon="close" />}>Test</Keyword>).toJSON()
  expect(tree).toMatchSnapshot()
})
