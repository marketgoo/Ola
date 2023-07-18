import React from 'react'

import Tooltip from './'
import Button from '../Button'
import Icon from '../Icon'
import ButtonIcon from '../ButtonIcon'

export default {
  title: 'Tooltip',
  component: Tooltip,
  argTypes: {
    onOpen: { action: 'open!' },
    onClose: { action: 'close!' },
    children: { control: { disable: true } },
    hover: { control: { disable: false } },
  },
}

export const Base = (args) => (
  <Tooltip {...args} trigger={<p>Click for show content</p>}>
    Content
  </Tooltip>
)

export const WithButtonIconHover = (args) => (
  <Tooltip
    {...args}
    hover
    trigger={
      <ButtonIcon as="span" icon="help" />
    }
  >
    Content
  </Tooltip>
)

export const WithButtonIcon = (args) => (
  <Tooltip
    {...args}
    trigger={
      <ButtonIcon as="span" icon="help" />
    }
  >
    Content
  </Tooltip>
)

export const WithButton = (args) => (
  <Tooltip
    {...args}
    trigger={
      <Button as="span" variant="primary">
        Click
      </Button>
    }
  >
    Content
  </Tooltip>
)

export const InAScrollableElement = () => (
  <div
    style={{
      height: '300px',
      width: '300px',
      overflow: 'auto',
      padding: '1em',
      border: 'solid',
    }}
  >
    <div style={{ padding: '300px' }}>
      <Tooltip
        trigger={
          <ButtonIcon as="span" icon="help" />
        }
      >
        Lorem ipsum
      </Tooltip>
    </div>
  </div>
)
