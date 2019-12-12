import React from 'react'

import create from '../create'

import Page from './'
import Icon from '../Icon'
import Level from '../Level'

create('Page')
  .add('Default', () => (
    <figure><Page title="Pricing - marketgoo" url="/pricing/" /></figure>
  ))
  .add('With icon', () => (
    <figure><Page title="Easy SEO Tools - marketgoo" url="/index" icon={<Icon name="home"/>} /></figure>
  ))
  .add('With level and link', () => (
    <figure><Page title="MarkeGoo PRO - marketgoo" url="/marketgoo-pro/" link="http://google.com" icon={<Level variant="medium"/>} /></figure>
  ))