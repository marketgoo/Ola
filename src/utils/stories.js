import React, { useEffect, useState } from 'react'
import '../variables.css'

export default {
  title: 'Utils'
}

const Table = ({ children }) =>
  <table className='st-table' cellSpacing="0" cellPadding="0">
    <thead>
      <tr>
        <th>Example</th>
        <th>Example Code</th>
        <th>Token</th>
      </tr>
    </thead>

    <tbody>
      {children}
    </tbody>
  </table>

export const FontStyles = () =>
  <Table>
    <tr>
      <td><h1 className="ola-display ola-nomargin">Display &lt;h1&gt;</h1></td>
      <td><pre>&lt;h1 className=&quot;ola-display&quot;&gt;...&lt;/h1&gt;</pre></td>
      <td><pre>ola-display</pre></td>
    </tr>
    <tr>
      <td><h2 className="ola-title ola-nomargin">Title &lt;h2&gt;</h2></td>
      <td><pre>&lt;h2 className=&quot;ola-title&quot;&gt;...&lt;/h2&gt;</pre></td>
      <td><pre>ola-title</pre></td>
    </tr>
    <tr>
      <td><p className="ola-headline ola-nomargin">Headline &lt;p&gt;</p></td>
      <td><pre>&lt;p className=&quot;ola-headline&quot;&gt;...&lt;/p&gt;</pre></td>
      <td><pre>ola-headline</pre></td>
    </tr>
    <tr>
      <td><h3 className="ola-headline ola-nomargin">Headline bold &lt;h3&gt;</h3></td>
      <td><pre>&lt;h3 className=&quot;ola-headline&quot;&gt;...&lt;/h3&gt;</pre></td>
      <td><pre>ola-headline</pre></td>
    </tr>
    <tr>
      <td><p className="ola-body ola-nomargin">Body &lt;p&gt;</p></td>
      <td><pre>&lt;p className=&quot;ola-body&quot;&gt;...&lt;/p&gt;</pre></td>
      <td><pre>ola-body</pre></td>
    </tr>
    <tr>
      <td><p className="ola-callout ola-nomargin">Callout &lt;p&gt;</p></td>
      <td><pre>&lt;p className=&quot;ola-callout&quot;&gt;...&lt;/p&gt;</pre></td>
      <td><pre>ola-callout</pre></td>
    </tr>
    <tr>
      <td><h2 className="ola-callout ola-nomargin">Callout Bold &lt;h2&gt;</h2></td>
      <td><pre>&lt;h2 className=&quot;ola-callout&quot;&gt;...&lt;/h2&gt;</pre></td>
      <td><pre>ola-callout</pre></td>
    </tr>
    <tr>
      <td><p className="ola-caption ola-nomargin">Caption &lt;p&gt;</p></td>
      <td><pre>&lt;p className=&quot;ola-caption&quot;&gt;...&lt;/p&gt;</pre></td>
      <td><pre>ola-caption</pre></td>
    </tr>
    <tr>
      <td><p className="ola-caption ola-bold ola-nomargin">Caption Bold &lt;p&gt;</p></td>
      <td><pre>&lt;p className=&quot;ola-caption ola-bold&quot;&gt;...&lt;/p&gt;</pre></td>
      <td><pre>ola-caption</pre></td>
    </tr>
    <tr>
      <td><strong className="ola-caption ola-nomargin">Caption Bold &lt;strong&gt;</strong></td>
      <td><pre>&lt;strong className=&quot;ola-caption&quot;&gt;..&lt;/strong&gt;</pre></td>
      <td><pre>ola-caption</pre></td>
    </tr>
  </Table>

export const Colors = () =>
  <Table>
    <tr>
      <td><div className="ola-brand ola-title">Brand</div></td>
      <td><pre>&lt;div className=&quot;ola-brand&quot;&gt;...&lt;/div&gt;</pre></td>
      <td><pre>ola-brand</pre></td>
    </tr>
    <tr>
      <td><div className="ola-accent ola-title">Accent</div></td>
      <td><pre>&lt;div className=&quot;ola-accent&quot;&gt;...&lt;/div&gt;</pre></td>
      <td><pre>ola-accent</pre></td>
    </tr>
    <tr>
      <td><div className="ola-white ola-bg-black ola-title">White</div></td>
      <td><pre>&lt;div className=&quot;ola-white&quot;&gt;...&lt;/div&gt;</pre></td>
      <td><pre>ola-white</pre></td>
    </tr>
    <tr>
      <td><div className="ola-black ola-title">Black</div></td>
      <td><pre>&lt;div className=&quot;ola-black&quot;&gt;...&lt;/div&gt;</pre></td>
      <td><pre>ola-black</pre></td>
    </tr>
    <tr>
      <td><div className="ola-gray ola-title">Gray</div></td>
      <td><pre>&lt;div className=&quot;ola-gray&quot;&gt;...&lt;/div&gt;</pre></td>
      <td><pre>ola-gray</pre></td>
    </tr>
    <tr>
      <td><div className="ola-gray-light ola-title">Gray Light</div></td>
      <td><pre>&lt;div className=&quot;ola-gray-light&quot;&gt;...&lt;/div&gt;</pre></td>
      <td><pre>ola-gray-light</pre></td>
    </tr>
    <tr>
      <td><div className="ola-gray-xlight ola-title">Gray XLight</div></td>
      <td><pre>&lt;div className=&quot;ola-gray-xlight&quot;&gt;...&lt;/div&gt;</pre></td>
      <td><pre>ola-gray-xlight</pre></td>
    </tr>
    <tr>
      <td><div className="ola-gray-xxlight ola-title">Gray XXLight</div></td>
      <td><pre>&lt;div className=&quot;ola-gray-xxlight&quot;&gt;...&lt;/div&gt;</pre></td>
      <td><pre>ola-gray-xxlight</pre></td>
    </tr>
    <tr>
      <td><div className="ola-error ola-title">Error</div></td>
      <td><pre>&lt;div className=&quot;ola-error&quot;&gt;...&lt;/div&gt;</pre></td>
      <td><pre>ola-error</pre></td>
    </tr>
    <tr>
      <td><div className="ola-warning ola-title">Warning</div></td>
      <td><pre>&lt;div className=&quot;ola-warning&quot;&gt;...&lt;/div&gt;</pre></td>
      <td><pre>ola-warning</pre></td>
    </tr>
    <tr>
      <td><div className="ola-success ola-title">Success</div></td>
      <td><pre>&lt;div className=&quot;ola-success&quot;&gt;...&lt;/div&gt;</pre></td>
      <td><pre>ola-success</pre></td>
    </tr>
    <tr>
      <td><div className="ola-pro ola-title">Pro</div></td>
      <td><pre>&lt;div className=&quot;ola-pro&quot;&gt;...&lt;/div&gt;</pre></td>
      <td><pre>ola-pro</pre></td>
    </tr>
  </Table>

export const BackgroundColors = () =>
  <Table>
    <tr>
      <td><div className="ola-bg-brand ola-white ola-title">Brand</div></td>
      <td><pre>&lt;div className=&quot;ola-bg-brand&quot;&gt;...&lt;/div&gt;</pre></td>
      <td><pre>ola-bg-brand</pre></td>
    </tr>
    <tr>
      <td><div className="ola-bg-accent ola-white ola-title">Accent</div></td>
      <td><pre>&lt;div className=&quot;ola-bg-accent&quot;&gt;...&lt;/div&gt;</pre></td>
      <td><pre>ola-bg-accent</pre></td>
    </tr>
    <tr>
      <td><div className="ola-bg-white ola-bg-black ola-white ola-title">White</div></td>
      <td><pre>&lt;div className=&quot;ola-bg-white&quot;&gt;...&lt;/div&gt;</pre></td>
      <td><pre>ola-bg-white</pre></td>
    </tr>
    <tr>
      <td><div className="ola-bg-black ola-white ola-title">Black</div></td>
      <td><pre>&lt;div className=&quot;ola-bg-black&quot;&gt;...&lt;/div&gt;</pre></td>
      <td><pre>ola-bg-black</pre></td>
    </tr>
    <tr>
      <td><div className="ola-bg-gray ola-white ola-title">Gray</div></td>
      <td><pre>&lt;div className=&quot;ola-bg-gray&quot;&gt;...&lt;/div&gt;</pre></td>
      <td><pre>ola-bg-gray</pre></td>
    </tr>
    <tr>
      <td><div className="ola-bg-gray-light ola-title">Gray Light</div></td>
      <td><pre>&lt;div className=&quot;ola-bg-gray-light&quot;&gt;...&lt;/div&gt;</pre></td>
      <td><pre>ola-bg-gray-light</pre></td>
    </tr>
    <tr>
      <td><div className="ola-bg-gray-xlight ola-title">Gray XLight</div></td>
      <td><pre>&lt;div className=&quot;ola-bg-gray-xlight&quot;&gt;...&lt;/div&gt;</pre></td>
      <td><pre>ola-bg-gray-xlight</pre></td>
    </tr>
    <tr>
      <td><div className="ola-bg-gray-xxlight ola-title">Gray XXLight</div></td>
      <td><pre>&lt;div className=&quot;ola-bg-gray-xxlight&quot;&gt;...&lt;/div&gt;</pre></td>
      <td><pre>ola-bg-gray-xxlight</pre></td>
    </tr>
    <tr>
      <td><div className="ola-bg-error ola-white ola-title">Error</div></td>
      <td><pre>&lt;div className=&quot;ola-bg-error&quot;&gt;...&lt;/div&gt;</pre></td>
      <td><pre>ola-bg-error</pre></td>
    </tr>
    <tr>
      <td><div className="ola-bg-warning ola-white ola-title">Warning</div></td>
      <td><pre>&lt;div className=&quot;ola-bg-warning&quot;&gt;...&lt;/div&gt;</pre></td>
      <td><pre>ola-bg-warning</pre></td>
    </tr>
    <tr>
      <td><div className="ola-bg-success ola-white ola-title">Success</div></td>
      <td><pre>&lt;div className=&quot;ola-bg-success&quot;&gt;...&lt;/div&gt;</pre></td>
      <td><pre>ola-bg-success</pre></td>
    </tr>
    <tr>
      <td><div className="ola-bg-pro ola-white ola-title">Pro</div></td>
      <td><pre>&lt;div className=&quot;ola-bg-pro&quot;&gt;...&lt;/div&gt;</pre></td>
      <td><pre>ola-bg-pro</pre></td>
    </tr>
  </Table>

export const BlackBolds = () =>
  <Table>
    <tr>
      <td>
        <div className="ola-callout ola-gray ola-black-bolds" style={{ whiteSpace: 'normal' }}>
          Lorem ipsum <strong>dolor sit amet,</strong> consectetur <b>adipiscing</b> elit. In velit
          sapien, venenatis id tincidunt ac, interdum a ipsum. Phasellus et ante libero. Etiam
          molestie metus a blandit viverra.
        </div>
      </td>
      <td><pre>&lt;div className=&quot;ola-black-bolds&quot;&gt;...&lt;/div&gt;</pre></td>
      <td><pre>ola-black-bolds</pre></td>
    </tr >
  </Table >

export const Margins = () => {
  const [styles, setStyles] = useState({ getPropertyValue: () => '' })

  useEffect(() => {
    setStyles(getComputedStyle(document.querySelector('.ola')))
  }, [document])

  return <Table>
    <tr>
      <td>
        <div style={{ border: 'solid 1px blue' }}>
          <div style={{ background: 'yellow', border: '3px solid gray', padding: '8px 16px' }} className="ola-nomargin">No Margin</div>
        </div>
      </td>
      <td><pre>&lt;div className=&quot;ola-nomargin&quot;&gt;...&lt;/div&gt;</pre></td>
      <td><pre>ola-nomargin</pre></td>
    </tr>
    <tr>
      <td>
        <div style={{ border: 'solid 1px blue' }}>
          <div style={{
            background: 'yellow',
            border: '3px solid gray',
            marginTop: '16px',
            marginRight: '16px',
            marginLeft: '16px',
            padding: '8px 16px'
          }} className="ola-nomargin-bottom">No Margin Bottom</div>
        </div>
      </td>
      <td><pre>&lt;div className=&quot;ola-nomargin-bottom&quot;&gt;...&lt;/div&gt;</pre></td>
      <td><pre>ola-nomargin-bottom</pre></td>
    </tr>
    <tr>
      <td>
        <div style={{ border: 'solid 1px blue' }}>
          <div style={{
            background: 'yellow',
            border: '3px solid gray',
            marginBottom: '16px',
            marginRight: '16px',
            marginLeft: '16px',
            padding: '8px 16px'
          }} className="ola-nomargin-top">No Margin Top</div>
        </div>
      </td>
      <td><pre>&lt;div className=&quot;ola-nomargin-top&quot;&gt;...&lt;/div&gt;</pre></td>
      <td><pre>ola-nomargin-top</pre></td>
    </tr>
    <tr>
      <td>
        <div style={{ border: 'solid 1px blue' }}>
          <div style={{
            background: 'yellow',
            border: '3px solid gray',
            padding: '8px 16px'
          }} className="ola-margin-top-1">Margin Top 1 <strong>({styles.getPropertyValue('--row-gap-1')})</strong></div>
        </div>
      </td>
      <td><pre>&lt;div className=&quot;ola-margin-top-1&quot;&gt;...&lt;/div&gt;</pre></td>
      <td><pre>ola-margin-top-1</pre></td>
    </tr>
    <tr>
      <td>
        <div style={{ border: 'solid 1px blue' }}>
          <div style={{
            background: 'yellow',
            border: '3px solid gray',
            padding: '8px 16px'
          }} className="ola-margin-bottom-1">Margin Bottom 1 <strong>({styles.getPropertyValue('--row-gap-1')})</strong></div>
        </div>
      </td>
      <td><pre>&lt;div className=&quot;ola-margin-bottom-1&quot;&gt;...&lt;/div&gt;</pre></td>
      <td><pre>ola-margin-bottom-1</pre></td>
    </tr>
    <tr>
      <td>
        <div style={{ border: 'solid 1px blue' }}>
          <div style={{
            background: 'yellow',
            border: '3px solid gray',
            padding: '8px 16px'
          }} className="ola-margin-left-1">Margin Left 1 <strong>({styles.getPropertyValue('--row-gap-1')})</strong></div>
        </div>
      </td>
      <td><pre>&lt;div className=&quot;ola-margin-left-1&quot;&gt;...&lt;/div&gt;</pre></td>
      <td><pre>ola-margin-left-1</pre></td>
    </tr>
    <tr>
      <td>
        <div style={{ border: 'solid 1px blue' }}>
          <div style={{
            background: 'yellow',
            border: '3px solid gray',
            padding: '8px 16px'
          }} className="ola-margin-right-1">Margin Right 1 <strong>({styles.getPropertyValue('--row-gap-1')})</strong></div>
        </div>
      </td>
      <td><pre>&lt;div className=&quot;ola-margin-right-1&quot;&gt;...&lt;/div&gt;</pre></td>
      <td><pre>ola-margin-right-1</pre></td>
    </tr >
    <tr>
      <td>
        <div style={{ border: 'solid 1px blue' }}>
          <div style={{
            background: 'yellow',
            border: '3px solid gray',
            padding: '8px 16px'
          }} className="ola-margin-top-2">Margin Top 2 <strong>({styles.getPropertyValue('--row-gap-2')})</strong></div>
        </div>
      </td>
      <td><pre>&lt;div className=&quot;ola-margin-top-2&quot;&gt;...&lt;/div&gt;</pre></td>
      <td><pre>ola-margin-top-2</pre></td>
    </tr>
    <tr>
      <td>
        <div style={{ border: 'solid 1px blue' }}>
          <div style={{
            background: 'yellow',
            border: '3px solid gray',
            padding: '8px 16px'
          }} className="ola-margin-bottom-2">Margin Bottom 2 <strong>({styles.getPropertyValue('--row-gap-2')})</strong></div>
        </div>
      </td>
      <td><pre>&lt;div className=&quot;ola-margin-bottom-2&quot;&gt;...&lt;/div&gt;</pre></td>
      <td><pre>ola-margin-bottom-2</pre></td>
    </tr >
    <tr>
      <td>
        <div style={{ border: 'solid 1px blue' }}>
          <div style={{
            background: 'yellow',
            border: '3px solid gray',
            padding: '8px 16px'
          }} className="ola-margin-left-2">Margin Left 2 <strong>({styles.getPropertyValue('--row-gap-2')})</strong></div>
        </div>
      </td>
      <td><pre>&lt;div className=&quot;ola-margin-left-2&quot;&gt;...&lt;/div&gt;</pre></td>
      <td><pre>ola-margin-left-2</pre></td>
    </tr>
    <tr>
      <td>
        <div style={{ border: 'solid 1px blue' }}>
          <div style={{
            background: 'yellow',
            border: '3px solid gray',
            padding: '8px 16px'
          }} className="ola-margin-right-2">Margin Right 2 <strong>({styles.getPropertyValue('--row-gap-2')})</strong></div>
        </div>
      </td>
      <td><pre>&lt;div className=&quot;ola-margin-right-2&quot;&gt;...&lt;/div&gt;</pre></td>
      <td><pre>ola-margin-right-2</pre></td>
    </tr>
    <tr>
      <td>
        <div style={{ border: 'solid 1px blue' }}>
          <div style={{
            background: 'yellow',
            border: '3px solid gray',
            padding: '8px 16px'
          }} className="ola-margin-top-3">Margin Top 3 <strong>({styles.getPropertyValue('--row-gap-3')})</strong></div>
        </div>
      </td>
      <td><pre>&lt;div className=&quot;ola-margin-top-3&quot;&gt;...&lt;/div&gt;</pre></td>
      <td><pre>ola-margin-top-3</pre></td>
    </tr>
    <tr>
      <td>
        <div style={{ border: 'solid 1px blue' }}>
          <div style={{
            background: 'yellow',
            border: '3px solid gray',
            padding: '8px 16px'
          }} className="ola-margin-bottom-3">Margin Bottom 3 <strong>({styles.getPropertyValue('--row-gap-3')})</strong></div>
        </div>
      </td>
      <td><pre>&lt;div className=&quot;ola-margin-bottom-3&quot;&gt;...&lt;/div&gt;</pre></td>
      <td><pre>ola-margin-bottom-3</pre></td>
    </tr>
    <tr>
      <td>
        <div style={{ border: 'solid 1px blue' }}>
          <div style={{
            background: 'yellow',
            border: '3px solid gray',
            padding: '8px 16px'
          }} className="ola-margin-left-3">Margin Left 3 <strong>({styles.getPropertyValue('--row-gap-3')})</strong></div>
        </div>
      </td>
      <td><pre>&lt;div className=&quot;ola-margin-left-3&quot;&gt;...&lt;/div&gt;</pre></td>
      <td><pre>ola-margin-left-3</pre></td>
    </tr>
    <tr>
      <td>
        <div style={{ border: 'solid 1px blue' }}>
          <div style={{
            background: 'yellow',
            border: '3px solid gray',
            padding: '8px 16px'
          }} className="ola-margin-right-3">Margin Right 3 <strong>({styles.getPropertyValue('--row-gap-3')})</strong></div>
        </div>
      </td>
      <td><pre>&lt;div className=&quot;ola-margin-right-3&quot;&gt;...&lt;/div&gt;</pre></td>
      <td><pre>ola-margin-right-3</pre></td>
    </tr>
  </Table >
}

console.log(getComputedStyle(document.querySelector('body')).getPropertyValue('--ola-margin-top'))