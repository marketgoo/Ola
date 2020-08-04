import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, radios } from '@storybook/addon-knobs'
import ButtonIcon from '../ButtonIcon'
import Icon from '../Icon'
import Tag from './'


storiesOf('Tag')
  .add('Default', () => (
    <figure><Tag>Default Tag</Tag></figure>
  ))
  .add('Viewer', () => (
    <figure>
      <Tag
        size={radios('Size', ['small', 'medium', 'big'], 'small')}
        variant={radios('Variant', ['invert', 'error', 'pro', 'success', 'warning'])}>
        <span>{text('Label', 'This is a tag')}</span>
      </Tag>
    </figure>
  ))
  .add('With a ButtonIcon', () => (
    <figure>
      <Tag
        size={radios('Size', ['small', 'medium', 'big'], 'small')}
        variant={radios('Variant', ['invert', 'error', 'pro', 'success', 'warning'])}>
        <span>{text('Label', 'This is a tag')}</span>
        <ButtonIcon><Icon name="close" size="small" /></ButtonIcon>
      </Tag>
    </figure>
  ))
