import React from 'react'
import Table from './'
import TableCell from './Cell'
import TableRow from './Row'
import Check from '../Check'
import renderer from 'react-test-renderer'


it('Default Table', () => {
  const tree = renderer
    .create(
      <Table>
        <tbody></tbody>
      </Table>
    )
    .toJSON()

  expect(tree).toMatchSnapshot()
})

it('Table with extra class', () => {
  const tree = renderer
    .create(
      <Table extraClass="extra-class">
        <tbody></tbody>
      </Table>
    )
    .toJSON()

  expect(tree).toMatchSnapshot()
})

it('Add caption', () => {
  const tree = renderer
    .create(
      <Table caption="test caption">
        <tbody></tbody>
      </Table>
    )
    .toJSON()

  expect(tree).toMatchSnapshot()
})

it('Can be stiky', () => {
  const tree = renderer
    .create(
      <Table sticky>
        <tbody></tbody>
      </Table>
    )
    .toJSON()

  expect(tree).toMatchSnapshot()
})

it('Default Cell', () => {
  const tree = renderer
    .create(
      <TableCell>Test content</TableCell>
    )
    .toJSON()

  expect(tree).toMatchSnapshot()
})

it('Header Cell', () => {
  const tree = renderer
    .create(
      <TableCell header>Content</TableCell>
    )
    .toJSON()

  expect(tree).toMatchSnapshot()
})

it('Empty Cell', () => {
  const tree = renderer
    .create(
      <TableCell></TableCell>
    )
    .toJSON()

  expect(tree).toMatchSnapshot()
})

it('ColSpan Cell', () => {
  const tree = renderer
    .create(
      <TableCell colSpan={8}></TableCell>
    )
    .toJSON()

  expect(tree).toMatchSnapshot()
})

it('Numeric Cell', () => {
  const tree = renderer
    .create(
      <TableCell variant="numeric">8</TableCell>
    )
    .toJSON()

  expect(tree).toMatchSnapshot()
})

it('Align center Cell', () => {
  const tree = renderer
    .create(
      <TableCell variant="center">Test content</TableCell>
    )
    .toJSON()

  expect(tree).toMatchSnapshot()
})

it('Table row', () => {
  const tree = renderer
    .create(
      <TableRow check={<Check></Check>}>
        <TableCell>First column</TableCell>
      </TableRow>
    )
    .toJSON()

  expect(tree).toMatchSnapshot()
})
