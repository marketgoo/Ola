import React from 'react'
import Segment from './'

export default {
  title: 'Segment',
  component: Segment,
  args: {
    className: '',
  },
  argTypes: {
    children: {
      control: { disable: true }
    },
    onClick: { action: 'clicked' },
  },
  decorators: [
    (Story) => (
      <div style={{ margin: '16px' }}>
        <p style={{
          backgroundColor: 'var(--color-neutral-100)',
          padding: '16px',
          marginBottom: '32px',
        }}>Include each button as <code>&lt;Segment.Button&gt;</code>. Is <b>NOT necessary</b> to use and import <code>&lt;SegmentButton&gt;</code> directly</p>
        {Story()}
      </div>
    ),
  ],
}

export const Base = (args) => <Segment {...args}>
  <Segment.Button selected>One &lt;Segment.Button&gt;</Segment.Button>
  <Segment.Button>I am a button</Segment.Button>
  <Segment.Button as="a" href="https://www.marketgoo.com/" target="_blank">I am an anchor</Segment.Button>
</Segment>
