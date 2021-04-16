import React from 'react'
import Tabs from './'
import Tab from './Content'

export default {
  title: 'Tabs',
  component: Tabs,
}

export const Base = (args) => {
  return (
    <Tabs {...args}>
      <Tab label="Tab 1">
        Tab 1 content
      </Tab>
      <Tab label="Tab 2">
        Tab 2 content
      </Tab>
    </Tabs>
  )
}

Base.argTypes = {
  children: { control: { disable: true } },
}
