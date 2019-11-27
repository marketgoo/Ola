import React from 'react'

import { withInfo } from '@storybook/addon-info'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, boolean, radios, select } from '@storybook/addon-knobs'

import { Button, ButtonIcon, ButtonGroup, Tag, Icon } from '../dist'

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .addDecorator(withInfo)
  .addDecorator(story => <div className="ola">{story()}</div>)
  .add('All buttons', () => (
    <Button
      onClick={action('onClick event')}
      disabled={boolean('Disabled', false)}
      busy={select('Busy', [false, 'Please, wait...'])}
      variant={radios('Variant', ['primary', 'secondary', 'destructive-primary', 'destructive', 'pro', 'link'])}>
      { text('Label', 'Button') }
    </Button>
  ))
  .add('As link', () => (
    <div>
      <figure><Button href="#" variant="primary" target="_blank">Link</Button></figure>
      <figure><Button href="#" variant="primary" disabled>Link disabled</Button></figure>
      <figure><Button href="#" variant="primary" busy='Link busy ...' disabled>Hide text by busy text</Button></figure>
      <figure><Button href="#" variant="link">Link style</Button></figure>
    </div>
  ))
  .add('As custom accent color', () => (
    <div style={{ '--accent': '#5BC500', '--accent-focus': '#5BC50033', '--accent-dark': '#449400' }}>
      <figure><Button>No variant</Button></figure>
      <figure><Button variant="primary">Primary</Button></figure>
      <figure><Button variant="secondary">Secondary</Button></figure>
      <figure><Button variant="primary" disabled>Disabled</Button></figure>
      <figure><Button variant="primary" busy='Link busy ...' disabled>Hide text by busy text</Button></figure>
      <figure><Button variant="link">Link style</Button></figure>
    </div>
  ))
  .add('Loading / Busy', () => (
    <Button busy='Busy ...'>Example text button</Button>
  ))
  .add('Button Icon', () => (
    <Tag>
      Tag with ButtonIcon <ButtonIcon onClick={action('onClick event')}><Icon name="close" size="small" /></ButtonIcon>
    </Tag>
  ))
  .add('Button Group', () => (
    <ButtonGroup variant={radios('Variant', ['default', 'center', 'reversed', 'reversed-center'], 'default')} style={{width: '500px', border: 'solid 1px'}}>
      <Button variant='primary' onClick={action('onClick event')}>Accept</Button>
      <Button variant='secondary' onClick={action('onClick event')}>Cancel</Button>
    </ButtonGroup>
  ))
