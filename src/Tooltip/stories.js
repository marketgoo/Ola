import React from 'react'
import { storiesOf } from '@storybook/react'
import { radios } from '@storybook/addon-knobs'

import Tooltip from './'
import Button from '../Button'
import Icon from '../Icon'
import ButtonIcon from '../ButtonIcon'
import Table from '../Table'
import TableCell from '../Table/Cell'

storiesOf('Tooltip')
  .add('Default', () => (
    <figure>
      <Tooltip trigger={<p>Click for show content</p>}>Content</Tooltip>
    </figure>
  ))
  .add('With Button', () => (
    <figure>
      <Tooltip trigger={<Button as="span" variant="primary">Trigger as span</Button>}>Lorem ipsum</Tooltip>
    </figure>
  ))
  .add('With ButtonIcon', () => (
    <figure>
      <Tooltip trigger={<ButtonIcon as="span"><Icon name="help" /></ButtonIcon>}>Lorem ipsum</Tooltip>
    </figure>
  ))
  .add('Variants', () => (
    <figure>
      <Tooltip variant={radios('Variant', ['', 'wide'], '')} trigger={<ButtonIcon as="span"><Icon name="help" /></ButtonIcon>}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Quisque ligula lacus, faucibus vitae sodales a, eleifend in massa.
        Donec sapien massa, interdum et facilisis vitae, elementum ac orci.
        Nam id blandit turpis. Cras eleifend accumsan nisi vitae luctus.
        Donec ultricies auctor sodales.
      </Tooltip>
    </figure>
  ))
  .add('In a table', () => (
    <figure>
      <Table caption="Superheros and sidekicks" stiky>
        <thead>
          <tr>
            <TableCell header>
              Your current page title
              <Tooltip trigger={<ButtonIcon as="span"><Icon name="help" size="small" /></ButtonIcon>}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Tooltip>
            </TableCell>
            <TableCell header variant="right">
              Incoming links
              <Tooltip trigger={<ButtonIcon as="span"><Icon name="help" size="small" /></ButtonIcon>}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Tooltip>
            </TableCell>
            <TableCell header variant="center">
              Popularity
              <Tooltip trigger={<ButtonIcon as="span"><Icon name="help" size="small" /></ButtonIcon>}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Tooltip>
            </TableCell>
          </tr>
        </thead>
        <tbody>
          <tr>
            <TableCell>value</TableCell>
            <TableCell variant="right">value</TableCell>
            <TableCell variant="center">value</TableCell>
          </tr>
          <tr>
            <TableCell>value</TableCell>
            <TableCell variant="right">value</TableCell>
            <TableCell variant="center">value</TableCell>
          </tr>
          <tr>
            <TableCell>value</TableCell>
            <TableCell variant="right">value</TableCell>
            <TableCell variant="center">value</TableCell>
          </tr>
        </tbody>
      </Table>
    </figure>
  ))
