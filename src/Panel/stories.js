import React from 'react'
import Panel from './'
import PanelHeader from './Header'
import PanelContent from './Content'
import PanelFooter from './Footer'
import ProgressBar from '../ProgressBar'
import Button from '../Button'
import ButtonGroup from '../ButtonGroup'
import Table from '../Table'
import TableCell from '../Table/Cell'
import TableRow from '../Table/Row'

export default {
  title: 'Panel',
  component: Panel
}

export const AllElements = () => 
  <Panel>
    <PanelHeader title="Panel Header" intro="Lorem ipsum for testing intro">
      <ProgressBar value="20" max="100" />
    </PanelHeader>
    <PanelContent title="Conten Title">
      <p>Panel content</p>
    </PanelContent>
    <PanelFooter>
      <ButtonGroup>
        <Button variant='primary'>Primary</Button>
        <Button variant='secondary'>Default Button</Button>
      </ButtonGroup>
    </PanelFooter>
  </Panel>

export const FullWidthAndHighlight = () => 
  <Panel>
    <PanelHeader title="Panel Header" intro="Lorem ipsum for testing intro">
      Optional extra content
    </PanelHeader>
    <PanelContent title="Conten Title" variant="fullwidth">
      <p>Panel content full width</p>
    </PanelContent>
    <PanelContent title="Conten Title" variant="highlight">
      <Table caption="Superheros and sidekicks" stiky>
        <thead>
          <TableRow>
            <TableCell header>Page</TableCell>
            <TableCell header variant="numeric">Incoming links</TableCell>
            <TableCell header variant="center">Popularity</TableCell>
          </TableRow>
        </thead>
        <tbody>
          <TableRow>
            <TableCell>Page title</TableCell>
            <TableCell variant="numeric">23K</TableCell>
            <TableCell variant="center">55K</TableCell>
          </TableRow>
        </tbody>
      </Table>
    </PanelContent>
    <PanelFooter>
      <ButtonGroup variant="reversed">
        <Button variant='primary'>Primary</Button>
        <Button variant='secondary'>Default Button</Button>
      </ButtonGroup>
    </PanelFooter>
  </Panel>
  
export const NoHeaderNoFooter = () => 
  <Panel>
    <PanelContent title="Panel 1">
      <p>Panel content</p>
    </PanelContent>
    <PanelContent title="Panel 2" variant="fullwidth">
      <p>Panel content fullwidth</p>
    </PanelContent>
    <PanelContent title="Panel 3">
      <p>Panel content</p>
    </PanelContent>
    <PanelContent title="Panel 2" variant="highlight">
      <p>Panel content fullwidth</p>
    </PanelContent>
  </Panel>
