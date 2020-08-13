import React from 'react'
import Tag from '../Tag'
import Icon from '../Icon'
import ButtonIcon from './'

export default {
  title: 'ButtonIcon',
  component: ButtonIcon
}

export const Base = (args) => <ButtonIcon {...args}>
    <Icon name="user" />
  </ButtonIcon>

Base.argTypes = {
  as: { control: { disable: true }},
  children: { control: { disable: true }}
}

export const TagWithButton = () => <Tag>
    Tag with ButtonIcon <ButtonIcon><Icon name="close" size="small" /></ButtonIcon>
  </Tag>
