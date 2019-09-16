import React from 'react'
import { withInfo } from '@storybook/addon-info'
import { storiesOf } from '@storybook/react'

storiesOf('Utils', module)
  .addDecorator(withInfo)
  .addDecorator(story => <div className="ola preview-centered is-wide">{story()}</div>)
  .add('Font styles', () => (
    <div>
      <div className="ola_util-display">Display</div>
      <div className="ola_util-title">Title</div>
      <div className="ola_util-headline">Headline</div>
      <div className="ola_util-body">Body</div>
      <div className="ola_util-callout">Callout</div>
      <div className="ola_util-caption">Caption</div>
    </div>
  ))
