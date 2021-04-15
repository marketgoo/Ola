import React from 'react'
import Tabs from './'
import Tab from './Content'
import renderer from 'react-test-renderer'

it('Segment with two buttons', () => {
  const tree = renderer
    .create(
      <Tabs>
        <Tab label="Tab 1">
          Tab 1 content
        </Tab>
        <Tab label="Tab 2">
          Tab 2 content
        </Tab>
      </Tabs>
    )
    .toJSON()

  expect(tree).toMatchSnapshot()
})
