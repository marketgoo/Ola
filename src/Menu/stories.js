import React from 'react'
import { storiesOf } from '@storybook/react'
import ButtonIcon from '../ButtonIcon'
import Icon from '../Icon'
import Tooltip from '../Tooltip'

import Menu from './'
import Item from './Item'

storiesOf('Menu')
  .add('Default', () => (
    <figure>
      <Menu>
        <Item>
          <Icon name="user" />
          <strong>Profile</strong>
        </Item>
        <Item href="#">
          <Icon name="help" />
          <strong>Help</strong>
        </Item>
        <Item variant="separator">
          <Icon name="error" />
          <strong>Logout</strong>
        </Item>
      </Menu>
    </figure>
  ))
  .add('In a tooltip', () => (
    <figure>
      <Tooltip trigger={<ButtonIcon as="span"><Icon name="user" /></ButtonIcon>}>
        <Menu>
          <Item>
            <Icon name="user" />
            <strong>Profile</strong>
          </Item>
          <Item href="#">
            <Icon name="help" />
            <strong>Help</strong>
          </Item>
          <Item variant="separator">
            <Icon name="error" />
            <strong>Logout</strong>
          </Item>
        </Menu>
      </Tooltip>
    </figure>
  ))
