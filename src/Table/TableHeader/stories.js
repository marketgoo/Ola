import React from 'react'
import Table from '../'
import Check from '../../Check'

export default {
  title: 'Table/Table.Header',
  component: Table.Header,
  args: {
  },
  argTypes: {
    children: { control: { disable: true }, description: 'Child nodes `TableCell | TableCell[]`' },
    __type__: { table: { disable: true }},
  },
  decorators: [
    (Story) => (
      <div style={{ margin: '16px' }}>
        <p style={{
          backgroundColor: 'var(--color-neutral-100)',
          padding: '16px',
          marginBottom: '32px',
        }}>A <code>&lt;Table.Header&gt;</code> is exclusively designed to be included in a <code>&lt;Table&gt;</code> component. This Story is <strong>for documentation purposes</strong> only.</p>
        {Story()}
      </div>
    ),
  ],
}

export const Base = (args) =>
  <Table.Header {...args}>
    <Table.Cell>
      <Check type="checkbox" name="foo" checked />
    </Table.Cell>
    <Table.Cell nowrap>The title</Table.Cell>
    <Table.Cell>The links</Table.Cell>
    <Table.Cell>The popularity</Table.Cell>
    <Table.Cell>The actions</Table.Cell>
  </Table.Header>
