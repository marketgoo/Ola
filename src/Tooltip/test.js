import React from 'react'
import Tooltip from './'
import renderer from 'react-test-renderer'

it('Default Tooltip', () => {
  const tree = renderer.create(<Tooltip trigger="Trigger">Content</Tooltip>).toJSON()
  expect(tree).toMatchSnapshot()
})

it('Tooltip with nodes', () => {
  const tree = renderer.create(<Tooltip trigger={<p>Node trigger</p>}><p>Node content</p></Tooltip>).toJSON()
  expect(tree).toMatchSnapshot()
})
