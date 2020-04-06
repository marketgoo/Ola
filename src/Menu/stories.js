import React from 'react'
import { storiesOf } from '@storybook/react'
import ButtonIcon from '../ButtonIcon'
import Icon from '../Icon'
import Tooltip from '../Tooltip'

import Menu from './'
import Option from './Option'

storiesOf('Menu')
  .add('Default', () => (
    <figure>
      <Menu>
        <Option>
          <Icon name="user" />
          <strong>Profile</strong>
        </Option>
        <Option href="#">
          <Icon name="help" />
          <strong>Help</strong>
        </Option>
        <Option separator>
          <Icon name="error" />
          <strong>Logout</strong>
        </Option>
      </Menu>
    </figure>
  ))
  .add('In a tooltip', () => (
    <figure>
      <Tooltip trigger={<ButtonIcon as="span"><Icon name="user" /></ButtonIcon>}>
        <Menu>
          <Option>
            <Icon name="user" />
            <strong>Profile</strong>
          </Option>
          <Option href="#">
            <Icon name="help" />
            <strong>Help</strong>
          </Option>
          <Option separator>
            <Icon name="error" />
            <strong>Logout</strong>
          </Option>
        </Menu>
      </Tooltip>
    </figure>
  ))
