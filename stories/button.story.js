import React from 'react'

import { withInfo } from '@storybook/addon-info'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, boolean, radios, select } from '@storybook/addon-knobs'

import { Button, ButtonIcon, ButtonGroup, Tag, Icon } from '../src'

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .addDecorator(withInfo)
  .addDecorator(story => <div className="ola preview-centered">{story()}</div>)
  .add('All buttons', () => (
    <Button
      onClick={action('onClick event')}
      disabled={boolean('Disabled', false)}
      busy={select('Busy', [false, 'Please, wait...'])}
      variant={radios('Variant', ['primary', 'secondary', 'destructive-primary', 'destructive', 'pro'])}>
      { text('Label', 'Button') }
    </Button>
  ))
  .add('Loading / Busy', () => (
    <Button busy='Busy ...'>Example text button</Button>
  ))
  .add('Button Icon', () => (
    <Tag>
      Tag with ButtoIcon <ButtonIcon onClick={action('onClick event')}><Icon name="help" size="small" /></ButtonIcon>
    </Tag>
  ))
  .add('Button Group', () => (
    <ButtonGroup reversed={boolean('Reversed')} style={{width: '500px', border: 'solid 1px'}}>
      <Button variant='primary' onClick={action('onClick event')}>Accept</Button>
      <Button variant='secondary' onClick={action('onClick event')}>Cancel</Button>
    </ButtonGroup>
  ))
