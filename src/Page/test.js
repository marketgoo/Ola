import React from 'react'
import Page from './'
import Icon from '../Icon'
import renderer from 'react-test-renderer'

it('Default Page', () => {
  const tree = renderer
    .create(<Page title="Title test" url="test.url.com" />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('Page with link', () => {
  const tree = renderer
    .create(<Page title="Title test" url="test.url.com" link="link.url.com" />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('Page with Icon', () => {
  const tree = renderer
    .create(<Page title="Title test" url="test.url.com" icon={<Icon />} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
