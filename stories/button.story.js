import React from 'react'

import { withInfo } from '@storybook/addon-info'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import { Button } from '../src'

storiesOf('Button', module)
  .addDecorator(withInfo)
  .addDecorator(story => <div className="ola preview-centered">{story()}</div>)
  .add('All', () => (
    <div className="preview-centered-inner">
      <Button onClick={action('onClick event')}>Default</Button>
      <Button disabled>Default disabled</Button>
      <Button onClick={action('onClick event')} variant='primary'>Primary</Button>
      <Button onClick={action('onClick event')} variant='destructive'>Is Destructive</Button>
      <Button onClick={action('onClick event')} variant='destructive-primary'>Is Destructive and primary</Button>
      <Button onClick={action('onClick event')} variant='pro'>Is Pro</Button>
      <Button onClick={action('onClick event')} variant='secondary'>Is Secondary</Button>
    </div>
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
  .add('Button group', () => (
    <div className="ola_button-group" style={{width: '500px', border: 'solid 1px'}}>
      <Button variant='primary' onClick={action('onClick event')}>Accept</Button>
      <Button variant='secondary' onClick={action('onClick event')}>Cancel</Button>
    </div>
  ))
  .add('Button group reversed', () => (
    <div className="ola_button-group is-reversed" style={{width: '500px', border: 'solid 1px'}}>
      <Button variant='primary' onClick={action('onClick event')}>Accept</Button>
      <Button variant='secondary' onClick={action('onClick event')}>Cancel</Button>
    </div>
  ))
