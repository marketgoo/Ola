import React from 'react'
import Table from '../'
import Check from '../../Check'

export default {
  title: 'Table/Table.Row',
  component: Table.Row,
  args: {
  },
  argTypes: {
    children: { control: false },
    sticky: { table: { disable: true }},
    header: { table: { disable: true }},
    stickyStyles: { table: { disable: true }},
  },
  decorators: [
    (Story) => (
      <div style={{ margin: '16px' }}>
        <p style={{
          backgroundColor: 'var(--color-neutral-100)',
          padding: '16px',
          marginBottom: '32px',
        }}>A <code>&lt;Table.Row&gt;</code> is exclusively designed to be included in a <code>&lt;Table&gt;</code> component. This Story is <strong>for documentation purposes</strong> only.</p>
        {Story()}
      </div>
    ),
  ],
}

export const Base = (args) =>
  <Table.Row {...args}>
    <Table.Cell>
      <Check type="checkbox" name="foo" checked />
    </Table.Cell>
    <Table.Cell nowrap>The title</Table.Cell>
    <Table.Cell>The links</Table.Cell>
    <Table.Cell>The popularity</Table.Cell>
    <Table.Cell>The actions</Table.Cell>
  </Table.Row>
