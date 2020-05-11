import React from 'react'
import { storiesOf } from '@storybook/react'

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

storiesOf('Table')
  .add('Selectable', () => (
    <figure>
      <Table caption="Superheros and sidekicks" stiky>
        <thead>
          <TableRow>
            <TableCell header variant="check"></TableCell>
            <TableCell header>Page</TableCell>
            <TableCell header variant="numeric">Incoming links</TableCell>
            <TableCell header variant="center">Popularity</TableCell>
          </TableRow>
        </thead>
        <tbody>
          { data.map( (row, idx) => (
            <TableRow key={idx} check={<Check type="checkbox" name="foo" checked={row.checked} />} checked={row.checked}>
              <TableCell>{row.title}</TableCell>
              <TableCell variant="numeric">{row.links}</TableCell>
              <TableCell variant="center">{row.popularity}</TableCell>
            </TableRow>
          ) ) }
        </tbody>
      </Table>
    </figure>
  ))
  .add('Default', () => (
    <figure>
      <Table caption="Superheros and sidekicks" stiky>
        <thead>
          <TableRow>
            <TableCell header>Your current page title</TableCell>
            <TableCell header variant="right">Incoming links</TableCell>
            <TableCell header variant="center">Popularity</TableCell>
          </TableRow>
        </thead>
        <tbody>
          { data.map( (row, idx) => (
            <TableRow key={idx}>
              <TableCell>{row.title}</TableCell>
              <TableCell variant="numeric">{row.links}</TableCell>
              <TableCell variant="center">{row.popularity}</TableCell>
              <TableCell variant="action">{row.action}</TableCell>
            </TableRow>
          ) ) }
        </tbody>
      </Table>
    </figure>
  ))
  .add('Responsive', () => (
    <figure>
      <Table caption="Superheros and sidekicks" responsive stiky>
        <thead>
          <TableRow>
            <TableCell header>Your current page title</TableCell>
            <TableCell header variant="right">Incoming links</TableCell>
            <TableCell header variant="center">Popularity</TableCell>
            <TableCell header>Your current page title</TableCell>
            <TableCell header variant="right">Incoming links</TableCell>
            <TableCell header variant="center">Popularity</TableCell>
            <TableCell header variant="action">Actions</TableCell>
          </TableRow>
        </thead>
        <tbody>
          { data.map( (row, idx) => (
            <TableRow key={idx}>
              <TableCell>{row.title}</TableCell>
              <TableCell variant="numeric">{row.links}</TableCell>
              <TableCell variant="center">{row.popularity}</TableCell>
              <TableCell>{row.title}</TableCell>
              <TableCell variant="numeric">{row.links}</TableCell>
              <TableCell variant="center">{row.popularity}</TableCell>
              <TableCell variant="action">{row.action}</TableCell>
            </TableRow>
          ) ) }
        </tbody>
      </Table>
    </figure>
  ))
  .add('Responsive multiline', () => (
    <figure>
      <Table caption="Superheros and sidekicks" responsive stiky>
        <thead>
          <TableRow>
            <TableCell header variant="multiline">Your current page title</TableCell>
            <TableCell header variant="right">Incoming links</TableCell>
            <TableCell header variant="center">Popularity</TableCell>
          </TableRow>
        </thead>
        <tbody>
          { data.map( (row, idx) => (
            <TableRow key={idx}>
              <TableCell variant="multiline">{row.title}</TableCell>
              <TableCell variant="numeric">{row.links}</TableCell>
              <TableCell variant="center">{row.popularity}</TableCell>
              <TableCell variant="action"><ButtonIcon><Icon name="close"/></ButtonIcon></TableCell>
            </TableRow>
          ) ) }
        </tbody>
      </Table>
    </figure>
  ))
