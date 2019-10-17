import React from 'react'
import { withInfo } from '@storybook/addon-info'
import { storiesOf } from '@storybook/react'

storiesOf('Utils', module)
  .addDecorator(withInfo)
  .addDecorator(story => <div className="ola">{story()}</div>)
  .add('Font styles', () => (
    <figure class="ola-bg">
      <div className="ola-display">Display</div>
      <div className="ola-title">Title</div>
      <div className="ola-headline">Headline</div>
      <div className="ola-body">Body</div>
      <div className="ola-callout">Callout</div>
      <div className="ola-caption">Caption</div>
    </figure>
  ))
