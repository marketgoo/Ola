import React from 'react'
import { storiesOf } from '@storybook/react'
import ButtonIcon from '../ButtonIcon'
import Icon from '../Icon'
import Tooltip from '../Tooltip'

storiesOf('Menu')
  .add('Default', () => (
    <figure>
      <ul className="ola_menu">
        <li>
          <span className="ola_menu-option">
            <Icon name="user" />
            <strong>Profile</strong>
          </span>
        </li>
        <li>
          <span className="ola_menu-option">
            <Icon name="help" />
            <strong>Help</strong>
          </span>
        </li>
        <li className="ola_menu-separator">
          <span className="ola_menu-option">
            <Icon name="error" />
            <strong>Logout</strong>
          </span>
        </li>
      </ul>
    </figure>
  ))
  .add('In a tooltip', () => (
    <figure>
      <Tooltip trigger={<ButtonIcon as="span"><Icon name="user" /></ButtonIcon>}>
        <ul className="ola_menu">
          <li>
            <a href="#" className="ola_menu-option">
              <Icon name="user" />
              <strong>Profile</strong>
            </a>
          </li>
          <li>
            <a href="#" className="ola_menu-option">
              <Icon name="help" />
              <strong>Help</strong>
            </a>
          </li>
          <li className="ola_menu-separator">
            <a href="#" className="ola_menu-option">
              <Icon name="error" />
              <strong>Logout</strong>
            </a>
          </li>
        </ul>
      </Tooltip>
    </figure>
  ))
