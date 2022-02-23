import React from 'react'
import Issue from './'
import IssueDropDown from './DropDown'

export default {
  title: 'IssueDropDown',
  component: IssueDropDown,
  args: {
    title: 'This is the title of the issue',
  },
}

export const DropDown = (args) => (
  <IssueDropDown {...args}>
    <p>This is the content of the issue</p>
  </IssueDropDown>
)

export const OnlyTitle = (args) => <Issue {...args} />

export const Permalink = () => (
  <article className="ola_issue-dropdown is-big">
    <Issue size="big" title="This is the title of the issue" />

    <div className="ola_issue-content">
      <p>This is the content of the issue</p>
    </div>
  </article>
)
