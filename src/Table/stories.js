import React from 'react'
import { storiesOf } from '@storybook/react'

import Table from './'
import TableRow from './Row'
import TableCell from './Cell'
import Button from '../Button'
import Check from '../Check'

const data = [
  {
    title: 'Page title test',
    links: '999999',
    popularity: 'hight',
    checked: false,
    action: <Button>Edit</Button>
  },
  {
    title: 'Page title test 2',
    links: '78854',
    popularity: 'medium',
    checked: true,
    action: <Button>Edit</Button>
  },
  {
    title: 'Page title test 3',
    links: '2354689',
    popularity: 'hight',
    checked: false,
    action: <Button>Edit</Button>
  },
  {
    title: 'Page title test 4',
    links: '7668132',
    popularity: 'low',
    checked: true,
    action: <Button>Edit</Button>
  }
]

storiesOf('Table')
  .add('Selectable', () => (
    <figure>
      <Table caption="Superheros and sidekicks" stiky>
        <thead>
          <tr>
            <TableCell variant="header"></TableCell>
            <TableCell variant="header">Page</TableCell>
            <TableCell variant="header" align="right">Incoming links</TableCell>
            <TableCell variant="header" align="center">Popularity</TableCell>
            <TableCell variant="header" align="center">Actions</TableCell>
          </tr>
        </thead>
        <tbody>
          { data.map( (row, idx) => (
            <TableRow key={idx} check={<Check type="checkbox" name="foo" checked={row.checked} />} checked={row.checked}>
              <TableCell>{row.title}</TableCell>
              <TableCell numeric>{row.links}</TableCell>
              <TableCell align="center">{row.popularity}</TableCell>
              <TableCell align="center">{row.action}</TableCell>
            </TableRow>
          ) ) }
        </tbody>
      </Table>
    </figure>
  ))
  .add('Default', () => (
    <Table caption="Superheros and sidekicks" stiky>
      <thead>
        <tr>
          <TableCell variant="header">Your current page title</TableCell>
          <TableCell variant="header" align="right">Incoming links</TableCell>
          <TableCell variant="header" align="center">Popularity</TableCell>
          <TableCell variant="header" align="center">Actions</TableCell>
        </tr>
      </thead>
      <tbody>
        { data.map( (row, idx) => (
          <tr key={idx}>
            <TableCell>{row.title}</TableCell>
            <TableCell numeric>{row.links}</TableCell>
            <TableCell align="center">{row.popularity}</TableCell>
            <TableCell align="center">{row.action}</TableCell>
          </tr>
        ) ) }
      </tbody>
    </Table>
  ))
