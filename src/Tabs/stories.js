import React, { useState } from 'react'
import Button from '../Button'
import TabSelector from './'
import TabContent from './Content'

export default {
  title: 'Tabs',
  component: TabSelector,
}

export const Base = (args) => {
  const [selected, setSelected] = useState(1)
  return (
    <>
      <TabSelector {...args}>
        <Button selected={selected === 1} variant="secondary" onClick={() => setSelected(1)}>
          Tab 1
        </Button>
        <Button selected={selected === 2} variant="secondary" onClick={() => setSelected(2)}>
          Tab 2
        </Button>
      </TabSelector>
      <TabContent selected={selected === 1}>Tab content 1</TabContent>
      <TabContent selected={selected === 2}>Tab content 2</TabContent>
    </>
  )
}

Base.argTypes = {
  children: { control: { disable: true } },
}
