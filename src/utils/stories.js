import React, { useEffect, useState } from 'react'
import { copyToClipboard } from '../utils'
import '../variables.css'

export default {
  title: 'Foundations/Utils'
}

const _copyToClipboard = (text) => {
  copyToClipboard(text)
  setTimeout(() => {
    alert(`Copied '${text}' to clipboard`)
  }, 100)
}

const Table = ({ children }) =>
  <table className='st-table' cellSpacing="0" cellPadding="0">
    <thead>
      <tr>
        <th>
          <span>Class</span>
          <span className='ola-brand' style={{
            display: 'block',
            fontSize: '12px',
            fontWeight: '500',
          }}>Click each one to copy to clipboard</span>
        </th>
        <th>Example</th>
        <th>Example Code</th>
      </tr>
    </thead>

    <tbody>
      {children}
    </tbody>
  </table>

export const FontStyles = () => {
  const fontStyles = [
    {
      name: 'Display',
      className: 'ola-display',
      tag: 'h1'
    },
    {
      name: 'Title',
      className: 'ola-title',
      tag: 'h2'
    },
    {
      name: 'Headline',
      className: 'ola-headline',
      tag: 'p'
    },
    {
      name: 'Headline bold',
      className: 'ola-headline',
      tag: 'h3'
    },
    {
      name: 'Body',
      className: 'ola-body',
      tag: 'p'
    },
    {
      name: 'Callout',
      className: 'ola-callout',
      tag: 'p'
    },
    {
      name: 'Callout Bold',
      className: 'ola-callout',
      tag: 'h2'
    },
    {
      name: 'Caption',
      className: 'ola-caption',
      tag: 'p'
    },
    {
      name: 'Caption Bold',
      className: 'ola-caption ola-bold',
      tag: 'p'
    },
    {
      name: 'Caption Bold',
      className: 'ola-caption',
      tag: 'strong'
    },
  ]

  return (
    <Table>
      {
        fontStyles.map((fontStyle, index) =>
          <tr key={index}>
            <td onClick={() => _copyToClipboard(fontStyle.className)} style={{ cursor: 'pointer' }}><pre>{fontStyle.className}</pre></td>
            <td><fontStyle.tag className={`${fontStyle.className} ola-nomargin`}>{fontStyle.name} &lt;{fontStyle.tag}&gt;</fontStyle.tag></td>
            <td><pre>&lt;{fontStyle.tag} className=&quot;{fontStyle.className}&quot;&gt;..&lt;/{fontStyle.tag}&gt;</pre></td>
          </tr>
        )
      }
    </Table>
  )
}

export const Colors = () => {
  const colors = [
    {
      name: 'Brand',
      className: 'ola-brand',
      extra: 'ola-title'
    },
    {
      name: 'Accent',
      className: 'ola-accent',
      extra: 'ola-title'
    },
    {
      name: 'White',
      className: 'ola-white',
      extra: 'ola-bg-black ola-title'
    },
    {
      name: 'Black',
      className: 'ola-black',
      extra: 'ola-title'
    },
    {
      name: 'Gray',
      className: 'ola-gray',
      extra: 'ola-title'
    },
    {
      name: 'Gray Light',
      className: 'ola-gray-light',
      extra: 'ola-title'
    },
    {
      name: 'Gray XLight',
      className: 'ola-gray-xlight',
      extra: 'ola-title'
    },
    {
      name: 'Gray XXLight',
      className: 'ola-gray-xxlight',
      extra: 'ola-title'
    },
    {
      name: 'Error',
      className: 'ola-error',
      extra: 'ola-title'
    },
    {
      name: 'Warning',
      className: 'ola-warning',
      extra: 'ola-title'
    },
    {
      name: 'Success',
      className: 'ola-success',
      extra: 'ola-title'
    },
    {
      name: 'Pro',
      className: 'ola-pro',
      extra: 'ola-title'
    },
  ]

  return (
    <Table>
      {
        colors.map((color, index) =>
          <tr key={index}>
            <td onClick={() => _copyToClipboard(color.className)} style={{ cursor: 'pointer' }}><pre>{color.className}</pre></td>
            <td><div className={`${color.className} ${color.extra}`}>{color.name}</div></td>
            <td><pre>&lt;div className=&quot;{color.className}&quot;&gt;...&lt;/div&gt;</pre></td>
          </tr>)
      }
    </Table>)
}

export const BackgroundColors = () => {
  const bgs = [
    {
      name: 'Brand',
      className: 'ola-bg-brand',
      extra: 'ola-white ola-title'
    },
    {
      name: 'Accent',
      className: 'ola-bg-accent',
      extra: 'ola-white ola-title'
    },
    {
      name: 'White',
      className: 'ola-bg-white',
      extra: 'ola-bg-black ola-white ola-title'
    },
    {
      name: 'Black',
      className: 'ola-bg-black',
      extra: 'ola-white ola-title'
    },
    {
      name: 'Gray',
      className: 'ola-bg-gray',
      extra: 'ola-white ola-title'
    },
    {
      name: 'Gray Light',
      className: 'ola-bg-gray-light',
      extra: 'ola-title'
    },
    {
      name: 'Gray XLight',
      className: 'ola-bg-gray-xlight',
      extra: 'ola-title'
    },
    {
      name: 'Gray XXLight',
      className: 'ola-bg-gray-xxlight',
      extra: 'ola-title'
    },
    {
      name: 'Error',
      className: 'ola-bg-error',
      extra: 'ola-white ola-title'
    },
    {
      name: 'Warning',
      className: 'ola-bg-warning',
      extra: 'ola-white ola-title'
    },
    {
      name: 'Success',
      className: 'ola-bg-success',
      extra: 'ola-white ola-title'
    },
    {
      name: 'Pro',
      className: 'ola-bg-pro',
      extra: 'ola-white ola-title'
    },
  ]

  return (
    <Table>
      {
        bgs.map((bg, index) =>
          <tr key={index}>
            <td onClick={() => _copyToClipboard(bg.className)} style={{ cursor: 'pointer' }}><pre>{bg.className}</pre></td>
            <td><div className={`${bg.className} ${bg.extra}`}>{bg.name}</div></td>
            <td><pre>&lt;div className=&quot;{bg.className}&quot;&gt;...&lt;/div&gt;</pre></td>
          </tr>)
      }
    </Table>)
}

export const BlackBolds = () =>
  <Table>
    <tr>
      <td onClick={() => _copyToClipboard('ola-black-bolds')} style={{ cursor: 'pointer' }}><pre>ola-black-bolds</pre></td>
      <td>
        <div className="ola-callout ola-gray ola-black-bolds" style={{ whiteSpace: 'normal' }}>
          Lorem ipsum <strong>dolor sit amet,</strong> consectetur <b>adipiscing</b> elit. In velit
          sapien, venenatis id tincidunt ac, interdum a ipsum. Phasellus et ante libero. Etiam
          molestie metus a blandit viverra.
        </div>
      </td>
      <td><pre>&lt;div className=&quot;ola-black-bolds&quot;&gt;...&lt;/div&gt;</pre></td>
    </tr >
  </Table >

export const Margins = () => {
  const [styles, setStyles] = useState({ getPropertyValue: () => '' })

  useEffect(() => {
    setStyles(getComputedStyle(document.querySelector('.ola')))
  }, [document])

  const margins = [
    {
      className: 'ola-nomargin',
      name: 'No Margin',
      style: { padding: '8px 16px' }
    },
    {
      className: 'ola-nomargin-bottom',
      name: 'No Margin Bottom',
      style: {
        marginTop: '16px',
        marginRight: '16px',
        marginLeft: '16px',
        padding: '8px 16px'
      }
    },
    {
      className: 'ola-nomargin-top',
      name: 'No Margin Top',
      style: {
        marginBottom: '16px',
        marginRight: '16px',
        marginLeft: '16px',
        padding: '8px 16px'
      }
    },
    {
      className: 'ola-margin-top-1',
      name: 'Margin Top 1',
      variable: '--row-gap-1',
      style: {
        padding: '8px 16px'
      }
    },
    {
      className: 'ola-margin-bottom-1',
      name: 'Margin Bottom 1',
      variable: '--row-gap-1',
      style: {
        padding: '8px 16px'
      }
    },
    {
      className: 'ola-margin-left-1',
      name: 'Margin Left 1',
      variable: '--row-gap-1',
      style: {
        padding: '8px 16px'
      }
    },
    {
      className: 'ola-margin-right-1',
      name: 'Margin Right 1',
      variable: '--row-gap-1',
      style: {
        padding: '8px 16px'
      }
    },
    {
      className: 'ola-margin-top-2',
      name: 'Margin Top 2',
      variable: '--row-gap-2',
      style: {
        padding: '8px 16px'
      }
    },
    {
      className: 'ola-margin-bottom-2',
      name: 'Margin Bottom 2',
      variable: '--row-gap-2',
      style: {
        padding: '8px 16px'
      }
    },
    {
      className: 'ola-margin-left-2',
      name: 'Margin Left 2',
      variable: '--row-gap-2',
      style: {
        padding: '8px 16px'
      }
    },
    {
      className: 'ola-margin-right-2',
      name: 'Margin Right 2',
      variable: '--row-gap-2',
      style: {
        padding: '8px 16px'
      }
    },
    {
      className: 'ola-margin-top-3',
      name: 'Margin Top 3',
      variable: '--row-gap-3',
      style: {
        padding: '8px 16px'
      }
    },
    {
      className: 'ola-margin-bottom-3',
      name: 'Margin Bottom 3',
      variable: '--row-gap-3',
      style: {
        padding: '8px 16px'
      }
    },
    {
      className: 'ola-margin-left-3',
      name: 'Margin Left 3',
      variable: '--row-gap-3',
      style: {
        padding: '8px 16px'
      }
    },
    {
      className: 'ola-margin-right-3',
      name: 'Margin Right 3',
      variable: '--row-gap-3',
      style: {
        padding: '8px 16px'
      }
    },
    {
      className: 'ola-margin-top-4',
      name: 'Margin Top 4',
      variable: '--row-gap-4',
      style: {
        padding: '8px 16px'
      }
    },
    {
      className: 'ola-margin-bottom-4',
      name: 'Margin Bottom 4',
      variable: '--row-gap-4',
      style: {
        padding: '8px 16px'
      }
    },
  ]

  return <Table>
    {
      margins.map((margin, index) =>
        <tr key={index}>
          <td onClick={() => _copyToClipboard(margin.className)} style={{ cursor: 'pointer' }}><pre>{margin.className}</pre></td>
          <td>
            <div style={{ border: 'solid 1px blue' }}>
              <div style={{
                background: 'yellow',
                border: '3px solid gray',
                ...margin.style
              }} className={margin.className}>{margin.name} {margin.variable && <strong>({styles.getPropertyValue(margin.variable)})</strong>}</div>
            </div>
          </td>
          <td><pre>&lt;div className=&quot;{margin.className}&quot;&gt;...&lt;/div&gt;</pre></td>
        </tr>)
    }
  </Table >
}
