import React from 'react'

export default {
  title: 'Utils'
}

export const FontStyles = () =>
  <div className="ola-bg">
    <h1 className="ola-display ola-nomargin">Display</h1>
    <h2 className="ola-title ola-nomargin">Title</h2>
    <p className="ola-headline ola-nomargin">Headline</p>
    <h3 className="ola-headline ola-nomargin">Headline Bold</h3>
    <p className="ola-body ola-nomargin">Body</p>
    <p className="ola-callout ola-nomargin">Callout</p>
    <h2 className="ola-callout ola-nomargin">Callout Bold</h2>
    <p className="ola-caption ola-nomargin">Caption</p>
    <p className="ola-caption ola-nomargin ola-bold">Caption Bold</p>
    <strong className="ola-caption">Caption Bold</strong>
  </div>

export const Colors = () =>
  <div>
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
  </div>

export const BackgroundColors = () =>
  <div>
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
  </div>

export const BlackBolds = () =>
  <div className="ola-callout ola-gray ola-black-bolds">
    Lorem ipsum <strong>dolor sit amet,</strong> consectetur <b>adipiscing</b> elit. In velit sapien, venenatis id tincidunt ac, interdum a ipsum. Phasellus et ante libero. Etiam molestie metus a blandit viverra.
  </div>

export const Margins = () =>
  <div>
    <p className="ola-nomargin">No margin</p>
    <p className="ola-nomargin-bottom">No margin bottom</p>
    <p className="ola-nomargin-top">No margin top</p>

    <div style={{ display: 'flex', alignItems: 'start', border: 'solid 1px', margin: '1em 0'}}>
      <div style={{background: 'yellow', border: 'solid'}} className="ola-margin-top-1">Margin top 1</div>
      <div style={{background: 'yellow', border: 'solid'}} className="ola-margin-bottom-1">Margin bottom 1</div>
      <div style={{background: 'yellow', border: 'solid'}} className="ola-margin-left-1">Margin left 1</div>
      <div style={{background: 'yellow', border: 'solid'}} className="ola-margin-right-1">Margin right 1</div>
    </div>

    <div style={{ display: 'flex', alignItems: 'start', border: 'solid 1px', margin: '1em 0'}}>
      <div style={{background: 'yellow', border: 'solid'}} className="ola-margin-top-2">Margin top 2</div>
      <div style={{background: 'yellow', border: 'solid'}} className="ola-margin-bottom-2">Margin bottom 2</div>
      <div style={{background: 'yellow', border: 'solid'}} className="ola-margin-left-2">Margin left 2</div>
      <div style={{background: 'yellow', border: 'solid'}} className="ola-margin-right-2">Margin right 2</div>
    </div>

    <div style={{ display: 'flex', alignItems: 'start', border: 'solid 1px', margin: '1em 0'}}>
      <div style={{background: 'yellow', border: 'solid'}} className="ola-margin-top-3">Margin top 3</div>
      <div style={{background: 'yellow', border: 'solid'}} className="ola-margin-bottom-3">Margin bottom 3</div>
      <div style={{background: 'yellow', border: 'solid'}} className="ola-margin-left-3">Margin left 3</div>
      <div style={{background: 'yellow', border: 'solid'}} className="ola-margin-right-3">Margin right 3</div>
    </div>
  </div>
