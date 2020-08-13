import React from 'react'
import ButtonIcon from '../ButtonIcon'
import Icon from '../Icon'
import Tooltip from '../Tooltip'

import Menu from './'
import MenuOption from './Option'

export default {
  title: 'Menu + MenuOption',
  component: MenuOption,
  args: {
    children: 'Option label',
  },
  argTypes: {
    as: { control: { disable: true }}
  }
}

export const Base = (args) => 
  <ul style={{listStyle: 'none'}}>
    <MenuOption {...args}>
      {args.children}
    </MenuOption>
  </ul>

export const InMenu = () => 
  <Menu>
    <MenuOption>
      <Icon name="user" />
      <strong>Profile</strong>
    </MenuOption>
    <MenuOption href="#">
      <Icon name="help" />
      <strong>Help</strong>
    </MenuOption>
    <MenuOption separator>
      <Icon name="error" />
      <strong>Logout</strong>
    </MenuOption>
  </Menu>

export const InTooltip = () =>
  <Tooltip trigger={<ButtonIcon as="span"><Icon name="user" /></ButtonIcon>}>
    <Menu>
      <MenuOption>
        <Icon name="user" />
        <strong>Profile</strong>
      </MenuOption>
      <MenuOption href="#">
        <Icon name="help" />
        <strong>Help</strong>
      </MenuOption>
      <MenuOption separator>
        <Icon name="error" />
        <strong>Logout</strong>
      </MenuOption>
    </Menu>
  </Tooltip>

export const Navigation = () =>
  <Menu>
    <MenuOption href="#" variant="nav" selected>
      General
    </MenuOption>
    <MenuOption href="#" variant="nav">
      Keywords
    </MenuOption>
    <MenuOption href="#" variant="nav">
      Competitors
    </MenuOption>
    <MenuOption href="#" variant="nav">
      Notifications
    </MenuOption>
    <MenuOption href="#" variant="nav">
      Connections
    </MenuOption>
  </Menu>
