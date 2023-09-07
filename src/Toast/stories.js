import React from 'react'
import Toast from './'
import Button from '../Button'
import { MegaphoneSimple } from '@phosphor-icons/react'


export default {
  title: 'Toast',
  component: Toast,
  args: {
    title: 'This is a Toast 🎉',
  },
}

export const Positive = (args) => (
  <Toast {...args}>
    <p>You can include some info message here! </p>
  </Toast>
)
Positive.args = {
  variant: 'positive'
}


export const Negative = (args) => (
  <Toast {...args}>
    <p>You can include some info message here! </p>
  </Toast>
)
Negative.args = {
  variant: 'negative'
}


export const Warning = (args) => (
  <Toast {...args}>
    <p>You can include some info message here! </p>
  </Toast>
)
Warning.args = {
  variant: 'warning'
}


export const Neutral = (args) => (
  <Toast {...args}>
    <p>You can include some info message here! </p>
  </Toast >
)

export const CustomIcon = (args) => (
  <Toast {...args}>
    <p>You can include some info message here! </p>
    <Button variant="link">Click me</Button>
  </Toast >
)
CustomIcon.args = {
  icon: <MegaphoneSimple size={24} weight="fill" />,
}

export const NoTitle = (args) => (
  <Toast {...args} variant="neutral" >
    <p style={{ marginTop: '0' }}>You can include some info message here! </p>
  </Toast >
)
NoTitle.args = {
  title: null
}