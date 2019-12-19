import React from 'react'
import { storiesOf } from '@storybook/react'

storiesOf('Utils')
  .add('Font styles', () => (
    <figure className="ola-bg">
      <h1 className="ola-display ola-nomargin">Display</h1>
      <h2 className="ola-title ola-nomargin">Title</h2>
      <p className="ola-headline ola-nomargin">Headline</p>
      <h3 className="ola-headline ola-nomargin">Headline Bold</h3>
      <p className="ola-body ola-nomargin">Body</p>
      <p className="ola-callout ola-nomargin">Callout</p>
      <p className="ola-caption ola-nomargin">Caption</p>
      <p className="ola-caption ola-nomargin ola-bold">Caption Bold</p>
      <strong className="ola-caption">Caption Bold</strong>
    </figure>
  ))
  .add('Colors', () => (
    <figure>
      <div className="ola-brand ola-title">Brand</div>
      <div className="ola-accent ola-title">Accent</div>
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
      <div className="ola-bg-accent ola-white ola-title">Accent</div>
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