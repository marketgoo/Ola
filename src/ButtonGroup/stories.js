import React from 'react'

import create from '../create'
import { action } from '@storybook/addon-actions'
import { radios } from '@storybook/addon-knobs'

import Button from '../Button'
import ButtonGroup from './'

create('ButtonGroup')
  .add('Viewer', () => (
    <ButtonGroup variant={radios('Variant', ['default', 'center', 'reversed', 'reversed-center'], 'default')} style={{width: '500px', border: 'solid 1px'}}>
      <Button variant='primary' onClick={action('onClick event')}>Accept</Button>
      <Button variant='secondary' onClick={action('onClick event')}>Cancel</Button>
    </ButtonGroup>
  ))
