import React from 'react'
import Button from '../Button'
import TabSelector from './'
import TabContent from './Content'
import renderer from 'react-test-renderer'

it('Segment with two buttons', () => {
  const tree = renderer
    .create(
      <>
        <TabSelector>
          <Button variant="secondary" selected>Tab 1</Button>
          <Button variant="secondary">Tab 2</Button>
        </TabSelector>
        <TabContent selected>Tab content 1</TabContent>
        <TabContent>Tab content 2</TabContent>
      </>
    )
    .toJSON()

  expect(tree).toMatchSnapshot()
})
