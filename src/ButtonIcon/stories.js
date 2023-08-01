import React from 'react'
import ButtonIcon from './'
import { Copy, ShieldCheck, Airplane } from '@phosphor-icons/react'

export default {
  title: 'ButtonIcon',
  component: ButtonIcon,
  args: {
    icon: 'home',
    color: 'neutral',
    as: 'button',
    variant: 'regular',
    invert: false,
    disabled: false,
    busy: false,
  },
  argTypes: {
    onClick: { action: 'clicked' },
    onFocus: { action: 'focused' },
    color: {
      control: {
        type: 'select',
        options: ['primary', 'neutral', 'positive', 'negative', 'warning', 'pro', 'accent'],
      },
    },
    icon: {
      control: {
        type: 'select',
        options: ['add', 'analytics', 'arrowDown', 'arrowRight', 'arrowUp', 'chevronDown', 'chevronLeft', 'chevronRight', 'chevronUp', 'clock', 'close', 'copy', 'error', 'edit', 'help', 'home', 'informationCircle', 'link', 'newWindow', 'null', 'page', 'plus', 'post', 'search', 'site', 'staticPage', 'success', 'user', 'warning'], 
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ backgroundColor: '#f6f6ff', padding: '32px' }}>
        {Story()}
      </div>
    ),
  ],
}

export const Base = (args) => <ButtonIcon {...args} />

export const PositiveColor = (args) => <ButtonIcon {...args} />
PositiveColor.args = {
  color: 'positive'
}

export const ProColor = (args) => <ButtonIcon {...args} />
ProColor.args = {
  color: 'pro'
}

export const Disabled = (args) => <ButtonIcon {...args} />
Disabled.args = {
  disabled: true
}

export const Busy = (args) => <ButtonIcon {...args} />
Busy.args = {
  busy: true
}

export const Invert = (args) => <ButtonIcon {...args} />
Invert.args = {
  invert: true
}

export const VariantDark = (args) => <ButtonIcon {...args} />
VariantDark.args = {
  variant: 'dark'
}

export const WithPhosphorIcons = (args) => <>
  <ButtonIcon {...args} icon={<Copy />} color="primary" />
  <ButtonIcon {...args} icon={<ShieldCheck />} color="positive" />
  <ButtonIcon {...args} icon={<Airplane />} color="pro" />
</>

