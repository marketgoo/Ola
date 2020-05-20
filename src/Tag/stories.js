import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, radios } from '@storybook/addon-knobs'

import Tag from './'
import ButtonIcon from '../ButtonIcon'
import Icon from '../Icon'

storiesOf('Tag')
  .add('Default', () => (
    <figure><Tag>Default Tag</Tag></figure>
  ))
  .add('Viewer', () => (
    <figure>
      <Tag
        size={radios('Size', ['small', 'medium', 'big'], 'small')}
        variant={radios('Variant', ['invert', 'error', 'pro', 'success', 'warning'])}>
        <span>{ text('Label', 'This is a tag') }</span>
      </Tag>
    </figure>
  ))
  .add('With a ButtonIcon', () => (
    <figure>
      <Tag
        size={radios('Size', ['small', 'medium', 'big'], 'small')}
        variant={radios('Variant', ['invert', 'error', 'pro', 'success', 'warning'])}>
        <span>{ text('Label', 'This is a tag') }</span>
        <ButtonIcon><Icon size="small" name="close" /></ButtonIcon>
      </Tag>
    </figure>
  ))
