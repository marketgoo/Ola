import React from 'react'

import { withInfo } from '@storybook/addon-info'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';

import { Button, ButtonIcon, ButtonGroup, Tag } from '../src'

storiesOf('Button', module)
  .addDecorator(withKnobs)
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
    <Button 
      onClick={action('onClick event')} 
      disabled={boolean('Disabled', false)}
      busy={select('Busy', [false, 'Please, wait...'])} 
      variant={select('Variant', [false, 'primary', 'secondary', 'destructive-primary', 'destructive', 'pro'])}
      >
      { text('Label', 'Button') }
    </Button>
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
  .add('Button Icon', () => (
    <Tag>
      Tag with ButtoIcon <ButtonIcon onClick={action('onClick event')}>x</ButtonIcon>
    </Tag>
  ))
  .add('Button group', () => (
    <ButtonGroup style={{width: '500px', border: 'solid 1px'}}>
      <Button variant='primary' onClick={action('onClick event')}>Accept</Button>
      <Button variant='secondary' onClick={action('onClick event')}>Cancel</Button>
    </ButtonGroup>
  ))
  .add('Button group reversed', () => (
    <ButtonGroup reversed style={{width: '500px', border: 'solid 1px'}}>
      <Button variant='primary' onClick={action('onClick event')}>Accept</Button>
      <Button variant='secondary' onClick={action('onClick event')}>Cancel</Button>
    </ButtonGroup>
  ))
