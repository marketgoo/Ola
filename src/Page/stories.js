import React from 'react'
import Page from './'
import Icon from '../Icon'
import Level from '../Level'

export default {
  title: 'Page',
  component: Page,
  args: {
    title: 'Pricing - marketgoo',
    url: '/pricing'
  },
  argTypes: {
    icon: { control: { disable: true }}
  }
}

export const Base = (args) => <Page {...args}/>

export const WithIcon = (args) => <Page icon={<Icon name="home"/>} {...args}/>

export const WithLevel = (args) => <Page icon={<Level variant="medium"/>} {...args}/>
