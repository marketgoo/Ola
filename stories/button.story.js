import React from 'react'

import { withInfo } from '@storybook/addon-info'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import { Button } from '../src'
import { Panel } from '../src'
import { PanelHeader } from '../src'
import { PanelContent } from '../src'
import { PanelFooter } from '../src'

storiesOf('Button', module)
  .addDecorator(withInfo)
  .addDecorator(story => <div className="ola">{story()}</div>)
  .add('All', () => (
    <Panel>
      <PanelHeader title="Buttons" intro="Examples of buttons in different states"/>
      <PanelContent>
        <p><Button onClick={action('onClick event')}>Default</Button></p>
        <p><Button disabled>Default disabled</Button></p>
        <p><Button onClick={action('onClick event')} variant='primary'>Primary</Button></p>
        <p><Button onClick={action('onClick event')} variant='destructive'>Is Destructive</Button></p>
        <p><Button onClick={action('onClick event')} variant='destructive-primary'>Is Destructive and primary</Button></p>
        <p><Button onClick={action('onClick event')} variant='pro'>Is Pro</Button></p>
        <p><Button onClick={action('onClick event')} variant='secondary'>Is Secondary</Button></p>
      </PanelContent>
      <PanelFooter panelButtons>
        <Button onClick={action('onClick event')} variant="secondary">Secondary</Button>
        <Button onClick={action('onClick event')} variant="primary">Primary</Button>
      </PanelFooter>
    </Panel>
  ))
  .add('Default', () => (
    <Button onClick={action('onClick event')}>Default</Button>
  ))
  .add('Disabled', () => (
    <Button disabled>Disabled</Button>
  ))
  .add('Loading / Busy', () => (
    <Button busy='Busy ...'>Example text button</Button>
  ))
  .add('Primary', () => (
    <Button variant='primary' onClick={action('onClick event')}>Primary</Button>
  ))
  .add('Secondary', () => (
    <Button variant='secondary' onClick={action('onClick event')}>Secondary</Button>
  ))
  .add('Destructive', () => (
    <Button variant='destructive' onClick={action('onClick event')}>Is Destructive</Button>
  ))
  .add('Primary & Destructive', () => (
    <Button variant='destructive-primary' onClick={action('onClick event')}>Is Destructive and primary</Button>
  ))
  .add('Pro', () => (
    <Button variant='pro' onClick={action('onClick event')}>Is Pro</Button>
  ))
