import React from 'react'
import TreeList from './'
import TreeListOption from './Option'
import renderer from 'react-test-renderer'

it('Default treeList', () => {
  const tree = renderer.create(<TreeList>
    <TreeListOption>Option 1</TreeListOption>
    <TreeListOption>Option 2</TreeListOption>
  </TreeList>).toJSON()
  expect(tree).toMatchSnapshot()
})
