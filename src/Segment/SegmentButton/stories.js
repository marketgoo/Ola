import React from 'react'
import Segment from '../'

export default {
  title: 'Segment.Button',
  component: Segment.Button,
  args: {
    className: '',
    selected: false,
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
        }}>A <code>&lt;Segment.Button&gt;</code> has no specific height and is designed to be included in a <code>&lt;Segment&gt;</code> component</p>
        {Story()}
      </div>
    ),
  ],
}

export const Base = (args) => <Segment.Button {...args}>Simple Segment.Button</Segment.Button>
export const Selected = (args) => <Segment.Button {...args}>Selected Segment.Button</Segment.Button>
Selected.args = {
  selected: true
}
