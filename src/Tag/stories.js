import React from 'react'
import ButtonIcon from '../ButtonIcon'
import Icon from '../Icon'
import Tag from './'

export default {
  title: 'Tag',
  component: Tag,
  args: {
    children: 'This is a tag'
  }
}

export const Base = (args) => <Tag {...args}>{args.children}</Tag>

export const WithButtonIcon = (args) => <Tag {...args}>{args.children} <ButtonIcon><Icon name="close" size="small" /></ButtonIcon></Tag>
