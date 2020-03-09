import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { radios } from '@storybook/addon-knobs'

import Tag from '../Tag'
import Icon from '../Icon'
import ButtonIcon from './'

storiesOf('ButtonIcon')
  .add('Viewer', () => (
    <figure>
      <ButtonIcon
        onClick={action('onClick event')}
        variant={radios('Variant', ['normal', 'destructive'], 'normal')}>
        <Icon name="close" />
      </ButtonIcon>
    </figure>
  ))
  .add('Tag with Button', () => (
    <Tag>
      Tag with ButtonIcon <ButtonIcon onClick={action('onClick event')}><Icon name="close" size="small" /></ButtonIcon>
    </Tag>
  ))
