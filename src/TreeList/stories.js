import React from 'react'
import TreeList from './'
import Page from '../Page'
import Icon from '../Icon'
import TreeListOption from './Option'
import Issue from '../Issue'

export default {
  title: 'TreeList',
  component: TreeList
}

export const Base = (args) => <TreeList {...args}>
  <TreeListOption><a href=""><Issue title="This is the title of an issue" /></a></TreeListOption>
  <TreeListOption><a href=""><Issue title="This is the title of an issue" /></a></TreeListOption>
  <TreeListOption><a href=""><Issue title="This is the title of an issue" /></a></TreeListOption>
  <TreeListOption><a href="">Option 4 with link</a></TreeListOption>
  <TreeListOption><a href="">Option 5 with link</a></TreeListOption>
  <TreeListOption><a href="">Option 6 with link</a></TreeListOption>
  <TreeListOption>
    <a href="">
      <Page title="This is the title of a page" url="/path/of/the/page" icon={<Icon name="page"/>} />
    </a>
    <TreeList>
      <TreeListOption><a href=""><Issue size="small" title="This is the title of an issue" /></a></TreeListOption>
      <TreeListOption><a href=""><Issue size="small" title="This is the title of an issue" /></a></TreeListOption>
      <TreeListOption><a href=""><Issue size="small" title="This is the title of an issue" /></a></TreeListOption>
    </TreeList>
  </TreeListOption>
</TreeList>