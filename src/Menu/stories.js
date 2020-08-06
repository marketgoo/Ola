import React from 'react'
import { storiesOf } from '@storybook/react'
import ButtonIcon from '../ButtonIcon'
import Icon from '../Icon'
import Tooltip from '../Tooltip'

import Menu from './'
import MenuOption from './Option'

storiesOf('Menu')
  .add('Default', () => (
    <figure>
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
    </figure>
  ))
  .add('In a tooltip', () => (
    <figure>
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
    </figure>
  ))
  .add('Aside', () => (
    <figure>
      <Menu>
        <MenuOption href="#" variant="nav" selected>
          <strong>General</strong>
        </MenuOption>
        <MenuOption href="#" variant="nav">
          <strong>Keywords</strong>
        </MenuOption>
        <MenuOption href="#" variant="nav">
          <strong>Competitors</strong>
        </MenuOption>
        <MenuOption href="#" variant="nav">
          <strong>Notifications</strong>
        </MenuOption>
        <MenuOption href="#" variant="nav">
          <strong>Connections</strong>
        </MenuOption>
      </Menu>
    </figure>
  ))
