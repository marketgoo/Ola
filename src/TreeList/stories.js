import React from 'react'
import TreeList from './'
import Page from '../Page'
import Icon from '../Icon'
import TreeListOption from './Option'

export default {
  title: 'TreeList',
  component: TreeList
}

export const Base = (args) => <TreeList {...args}>
  <TreeListOption>Option 1</TreeListOption>
  <TreeListOption>Option 2</TreeListOption>
  <TreeListOption>Option 3</TreeListOption>
  <TreeListOption><a href="">Option 4 with link</a></TreeListOption>
  <TreeListOption><a href="">Option 5 with link</a></TreeListOption>
  <TreeListOption><a href="">Option 6 with link</a></TreeListOption>
  <TreeListOption>
    <a href="">
      <Page title="This is the title of a page" url="/path/of/the/page" icon={<Icon name="page"/>} />
    </a>
    <TreeList>
      <TreeListOption>Option 1</TreeListOption>
      <TreeListOption>Option 2</TreeListOption>
      <TreeListOption>Option 3</TreeListOption>
      <TreeListOption><a href="">Option 4 with link</a></TreeListOption>
      <TreeListOption><a href="">Option 5 with link</a></TreeListOption>
      <TreeListOption><a href="">Option 6 with link and long text: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper, felis sed ultricies congue, arcu nisl eleifend ante, a tempor est lacus vitae magna. Cras at urna ligula. Nam maximus consectetur diam et ullamcorper.</a></TreeListOption>
    </TreeList>
  </TreeListOption>
</TreeList>
