import React from 'react'
import Table from '../'

export default {
  title: 'Table/Table.Cell',
  component: Table.Cell,
  args: {
    nowrap: false,
    selected: false,
    orderable: false,
    direction: null
  },
  argTypes: {
    children: { control: false },
    loading: { table: { disable: true }},
    header: { table: { disable: true }},
  },
  decorators: [
    (Story) => (
      <div style={{ margin: '16px' }}>
        <p style={{
          backgroundColor: 'var(--color-neutral-100)',
          padding: '16px',
          marginBottom: '32px',
        }}>A <code>&lt;Table.Cell&gt;</code> is exclusively designed to be included in a <code>&lt;Table.Row&gt; | &lt;Table.Header&gt;</code> component. This Story is <strong>for documentation purposes</strong> only.</p>
        {Story()}
      </div>
    ),
  ],
}

export const Base = (args) =>
  <Table.Cell {...args}>A cell</Table.Cell>
