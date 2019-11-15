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
  .add('Colors', () => (
    <figure>
      <div className="ola-brand ola-title">Brand</div>
      <div className="ola-white ola-bg-black ola-title">White</div>
      <div className="ola-black ola-title">Black</div>
      <div className="ola-gray ola-title">Gray</div>
      <div className="ola-gray-light ola-title">Gray Light</div>
      <div className="ola-gray-xlight ola-title">Gray XLight</div>
      <div className="ola-error ola-title">Error</div>
      <div className="ola-warning ola-title">Warning</div>
      <div className="ola-success ola-title">Success</div>
      <div className="ola-pro ola-title">Pro</div>
    </figure>
  ))
  .add('Background colors', () => (
    <figure>
      <div className="ola-bg-brand ola-white ola-title">Brand</div>
      <div className="ola-bg-white ola-title">White</div>
      <div className="ola-bg-black ola-white ola-title">Black</div>
      <div className="ola-bg-gray ola-white ola-title">Gray</div>
      <div className="ola-bg-gray-light ola-title">Gray Light</div>
      <div className="ola-bg-gray-xlight ola-title">Gray XLight</div>
      <div className="ola-bg-error ola-white ola-title">Error</div>
      <div className="ola-bg-warning ola-white ola-title">Warning</div>
      <div className="ola-bg-success ola-white ola-title">Success</div>
      <div className="ola-bg-pro ola-white ola-title">Pro</div>
    </figure>
  ))
