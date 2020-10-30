import React from 'react'
import Issue from './'

export default {
  title: 'Issue',
  component: Issue,
  args: {
    title: 'This is the title of the issue',
  },
}

export const Base = (args) => <Issue {...args} />

export const WithLink = (args) => (
  <Issue link={'http://www.google.com'} {...args} />
)
