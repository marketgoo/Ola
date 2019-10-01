import React from 'react'
import { withInfo } from '@storybook/addon-info'
import { storiesOf } from '@storybook/react'

import { Page } from '../dist'

storiesOf('Page', module)
  .addDecorator(withInfo)
  .addDecorator(story => <div className="ola preview-centered">{story()}</div>)
  .add('All', () => (
    <div className="preview-centered-inner">
      <Page>Default Tag</Page>
    </div>
  ))
