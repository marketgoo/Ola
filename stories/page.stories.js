import React from 'react'
import { withInfo } from '@storybook/addon-info'
import { storiesOf } from '@storybook/react'

import { Page } from '../dist'

storiesOf('Page', module)
  .addDecorator(withInfo)
  .addDecorator(story => <div className="ola preview-centered">{story()}</div>)
  .add('Page list', () => (
    <div className="preview-inner">
      <Page title="Easy SEO Tools - marketgoo" url="/index" iconName="home" />
      <Page title="Free SEO Report - marketgoo" url="/free-seo-report/" />
      <Page title="MarkeGoo PRO - marketgoo" url="/marketgoo-pro/" />
      <Page title="Pricing - marketgoo" url="/pricing/" iconName={null} />
    </div>
  ))
