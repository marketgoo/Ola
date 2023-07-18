import React from 'react'
import Table from './'
import renderer from 'react-test-renderer'


it('Default Table', () => {
  const tree = renderer
    .create(
      <Table>
        <Table.Row>
          <Table.Cell></Table.Cell>
          <Table.Cell nowrap>Title</Table.Cell>
          <Table.Cell>Links</Table.Cell>
          <Table.Cell>Popularity</Table.Cell>
          <Table.Cell>Action</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            Check
          </Table.Cell>
          <Table.Cell nowrap>The title</Table.Cell>
          <Table.Cell>The links</Table.Cell>
          <Table.Cell>The popularity</Table.Cell>
          <Table.Cell>The actions</Table.Cell>
        </Table.Row>
      </Table>
    )
    .toJSON()

  expect(tree).toMatchSnapshot()
})
