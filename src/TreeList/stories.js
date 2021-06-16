import React from 'react'
import TreeList from './'
import Page from '../Page'
import Icon from '../Icon'
import Level from '../Level'
import Tag from '../Tag'
import TreeListOption from './Option'
import Issue from '../Issue'

export default {
  title: 'TreeList',
  component: TreeList,
}

export const Base = (args) => <Content {...args} />
export const Background = (args) => <div className="ola-bg"><Content {...args} /></div>

function Content(...args) {
  return <TreeList {...args}>
    <TreeListOption>
      <a href="">
        <Issue title="This is the title of an issue" />
      </a>
    </TreeListOption>
    <TreeListOption>
      <a className="ola-bg-hover" href="">
        <Issue title="This is the title of an issue type pending" variant="pending" />
      </a>
    </TreeListOption>
    <TreeListOption>
      <a href="">
        <Issue title="This is the title of an issue" />
      </a>
    </TreeListOption>
    <TreeListOption>
      <a href="" className="ola-bg-hover"><Level /> Option 4 with level <Tag>and a tag</Tag></a>
    </TreeListOption>
    <TreeListOption>
      <a href="">Option 5 with link</a>
    </TreeListOption>
    <TreeListOption>
      <a href="">Option 6 with link</a>
    </TreeListOption>
    <TreeListOption>
      <a href="">
        <Page
          title="This is the title of a page"
          url="/path/of/the/page"
          icon={<Icon name="page" />}
        />
      </a>
      <TreeList>
        <TreeListOption>
          <a href="">
            <Issue size="small" title="This is the title of an issue" />
          </a>
        </TreeListOption>
        <TreeListOption>
          <a href="">
            <Issue size="small" title="This is the title of an issue" />
          </a>
        </TreeListOption>
        <TreeListOption>
          <a href="">
            <Issue size="small" title="This is the title of an issue" />
          </a>
        </TreeListOption>
      </TreeList>
    </TreeListOption>
    <TreeListOption variant="link">
      <div>
        <Issue title="This is the title of an issue" />
      </div>
    </TreeListOption>
  </TreeList>
}