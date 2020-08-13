import React from 'react'
import Tag from '../Tag'
import Icon from '../Icon'
import ButtonIcon from './'

export default {
  title: 'ButtonIcon',
  component: ButtonIcon,
  argTypes: {
    onClick: { action: 'clicked' },
    onFocus: { action: 'focused' },
    as: { control: { disable: true }},
    children: { control: { disable: true }}
  }
}

export const Base = (args) => <ButtonIcon {...args}>
    <Icon name="user" />
  </ButtonIcon>

export const TagWithButton = () => <Tag>
    Tag with ButtonIcon <ButtonIcon><Icon name="close" size="small" /></ButtonIcon>
  </Tag>
