import React from 'react'
import { withInfo } from '@storybook/addon-info'
import { storiesOf } from '@storybook/react'
import { Page, Icon, Level } from '../dist'

storiesOf('Page', module)
  .addDecorator(withInfo)
  .addDecorator(story => <div className="ola">{story()}</div>)
  .add('Page list', () => (
    <div>
      <figure><Page title="Easy SEO Tools - marketgoo" url="/index" icon={<Icon name="home"/>} /></figure>
      <figure><Page title="Free SEO Report - marketgoo" url="/free-seo-report/" icon={<Icon name="page"/>} /></figure>
      <figure><Page title="MarkeGoo PRO - marketgoo" url="/marketgoo-pro/" link="http://google.com" icon={<Level variant="medium"/>} /></figure>
      <figure><Page title="Pricing - marketgoo" url="/pricing/" /></figure>
    </div>
  ))
