import React from 'react'
import { withInfo } from '@storybook/addon-info'
import { storiesOf } from '@storybook/react'
import { Table, TableCell, Button, Panel, PanelContent, PanelFooter, ButtonGroup, Check } from '../dist'

const data = [
  {
    title: 'Page title test',
    links: '999999',
    popularity: 'hight',
    action: <Button>Edit</Button>
  },
  {
    title: 'Page title test 2',
    links: '78854',
    popularity: 'medium',
    action: <Button>Edit</Button>
  },
  {
    title: 'Page title test 3',
    links: '2354689',
    popularity: 'hight',
    action: <Button>Edit</Button>
  },
  {
    title: 'Page title test 4',
    links: '7668132',
    popularity: 'low',
    action: <Button>Edit</Button>
  }
]

storiesOf('Table', module)
  .addDecorator(withInfo)
  .addDecorator(story => <div className="ola">{story()}</div>)
  .add('Complete', () => (
    <div>
      <Table caption="Superheros and sidekicks" stiky>
        <thead>
          <tr>
            <TableCell variant="header">Page</TableCell>
            <TableCell variant="header" align="right">Incoming links</TableCell>
            <TableCell variant="header" align="center">Popularity</TableCell>
            <TableCell variant="header" align="center">Actions</TableCell>
          </tr>
        </thead>
        <tbody>
          { data.map( (row, idx) => (
            <tr key={idx}>
              <TableCell><Check>{row.title}</Check></TableCell>
              <TableCell numeric>{row.links}</TableCell>
              <TableCell align="center">{row.popularity}</TableCell>
              <TableCell align="center">{row.action}</TableCell>
            </tr>
          ) ) }
        </tbody>
      </Table>
    </div>
  ))
  .add('Responive example', () => (
    <Panel>
      <PanelContent>
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
      </PanelContent>
      <PanelFooter>
        <ButtonGroup reversed>
          <Button variant='primary'>Primary</Button>
          <Button variant='secondary'>Default Button</Button>
        </ButtonGroup>
      </PanelFooter>
    </Panel>
  ))
