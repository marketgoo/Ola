import React from 'react'
import Table from './'
import TableRow from './Row'
import TableCell from './Cell'
import Button from '../Button'
import ButtonIcon from '../ButtonIcon'
import Check from '../Check'
import Icon from '../Icon'

const data = [
  {
    title: 'Page title test',
    links: '999999',
    popularity: 'hight',
    checked: false,
    action: <Button>Change column</Button>
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
    action: <Button>Other action</Button>
  },
  {
    title: 'Page title test 4',
    links: '7668132',
    popularity: 'low',
    checked: true,
    action: <ButtonIcon><Icon name="close"/></ButtonIcon>
  }
]

export default {
  title: 'Table',
  component: Table,
  args: {
    caption: ''
  },
  argTypes: {
    children: { control: { disable: true }}
  }
}

export const Base = (args) => 
  <Table {...args}>
    <thead>
      <TableRow>
        <TableCell header variant="check"></TableCell>
        <TableCell header>Page</TableCell>
        <TableCell header variant="numeric">Incoming links</TableCell>
        <TableCell header variant="numeric">Popularity</TableCell>
        <TableCell header>Page</TableCell>
        <TableCell header variant="numeric">Incoming links</TableCell>
        <TableCell header variant="numeric">Popularity</TableCell>
      </TableRow>
    </thead>
    <tbody>
      { data.map( (row, idx) => (
        <TableRow key={idx} check={<Check type="checkbox" name="foo" checked={row.checked} />} checked={row.checked}>
          <TableCell>{row.title}</TableCell>
          <TableCell variant="numeric">{row.links}</TableCell>
          <TableCell variant="numeric">{row.popularity}</TableCell>
          <TableCell>{row.title}</TableCell>
          <TableCell variant="numeric">{row.links}</TableCell>
          <TableCell variant="numeric">{row.popularity}</TableCell>
        </TableRow>
      ) ) }
    </tbody>
  </Table>
