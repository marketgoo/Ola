import React from 'react'

import Tooltip from './'
import Button from '../Button'
import Icon from '../Icon'
import ButtonIcon from '../ButtonIcon'

export default {
  title: 'Tooltip',
  component: Tooltip,
  argTypes: {
    trigger: { control: { disable: true }},
    children: { control: { disable: true }},
  }
}

export const Base = (args) => <Tooltip trigger={<p>Click for show content</p>} {...args}>Content</Tooltip>
export const WithButton = (args) => <Tooltip trigger={<Button as="span" variant="primary">Click</Button>} {...args}>Content</Tooltip>
export const WithButtonIcon = (args) => <Tooltip trigger={<ButtonIcon as="span"><Icon name="help" /></ButtonIcon>} {...args}>Content</Tooltip>
export const InAScrollableElement = () => 
  <div style={{height: '300px', width: '300px', overflow: 'auto', padding: '1em', border: 'solid'}}>
    <div style={{padding: '300px'}}>
      <Tooltip trigger={<ButtonIcon as="span"><Icon name="help" /></ButtonIcon>}>Lorem ipsum</Tooltip>
    </div>
  </div>
