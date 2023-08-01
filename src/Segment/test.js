import React from 'react'
import Segment from './'
import renderer from 'react-test-renderer'

it('Default Segment', () => {
  const tree = renderer
    .create(
      <Segment>
        <Segment.Button selected>One &lt;Segment.Button&gt;</Segment.Button>
        <Segment.Button>I am a button</Segment.Button>
        <Segment.Button as="a" href="https://www.marketgoo.com/" target="_blank">I am an anchor</Segment.Button>
      </Segment>
    )
    .toJSON()

  expect(tree).toMatchSnapshot()
})
