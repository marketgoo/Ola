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
          <span className='ola-color-primary-500' style={{
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
      name: 'Font 8',
      className: 'ola-font-8-medium',
      tag: 'h1'
    },
    {
      name: 'Font 7',
      className: 'ola-font-7-medium',
      tag: 'h2'
    },
    {
      name: 'Font 6',
      className: 'ola-font-6-medium',
      tag: 'h3'
    },
    {
      name: 'Font 5',
      className: 'ola-font-5-medium',
      tag: 'h4'
    },
    {
      name: 'Font 4 Bold',
      className: 'ola-font-4-bold',
      tag: 'p'
    },
    {
      name: 'Font 4 Regular',
      className: 'ola-font-4-regular',
      tag: 'p'
    },
    {
      name: 'Font 3 Bold',
      className: 'ola-font-3-bold',
      tag: 'p'
    },
    {
      name: 'Font 3 Regular',
      className: 'ola-font-3-regular',
      tag: 'p'
    },
    {
      name: 'Font 2 Bold',
      className: 'ola-font-2-bold',
      tag: 'p'
    },
    {
      name: 'Font 2 Regular',
      className: 'ola-font-2-regular',
      tag: 'p'
    },
    {
      name: 'Font 1 Bold',
      className: 'ola-font-1-bold',
      tag: 'p'
    },
    {
      name: 'Font 1 Regular',
      className: 'ola-font-1-regular',
      tag: 'p'
    },
    {
      name: 'Font 0 Bold',
      className: 'ola-font-0-bold',
      tag: 'p'
    },
    {
      name: 'Font 0 Regular',
      className: 'ola-font-0-regular',
      tag: 'p'
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
  const [styles, setStyles] = useState({ getPropertyValue: () => '' })

  useEffect(() => {
    setStyles(getComputedStyle(document.querySelector('.ola')))
  }, [document])

  const colors = [
    {
      className: 'ola-color-primary-100',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-color-primary-100a',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-color-primary-200',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-color-primary-200a',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-color-primary-300',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-color-primary-300a',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-color-primary-400',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-color-primary-400a',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-color-primary-500',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-color-primary-600',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-color-primary-700',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-color-primary-800',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-color-primary-900',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-color-neutral-100',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-color-neutral-100a',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-color-neutral-200',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-color-neutral-200a',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-color-neutral-300',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-color-neutral-300a',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-color-neutral-400',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-color-neutral-400a',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-color-neutral-500',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-color-neutral-600',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-color-neutral-700',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-color-neutral-800',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-color-neutral-900',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-color-positive-100',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-color-positive-100a',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-color-positive-200',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-color-positive-200a',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-color-positive-300',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-color-positive-300a',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-color-positive-400',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-color-positive-400a',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-color-positive-500',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-color-positive-600',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-color-positive-700',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-color-positive-800',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-color-positive-900',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-color-negative-100',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-color-negative-100a',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-color-negative-200',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-color-negative-200a',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-color-negative-300',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-color-negative-300a',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-color-negative-400',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-color-negative-400a',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-color-negative-500',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-color-negative-600',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-color-negative-700',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-color-negative-800',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-color-negative-900',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-color-warning-100',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-color-warning-100a',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-color-warning-200',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-color-warning-200a',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-color-warning-300',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-color-warning-300a',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-color-warning-400',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-color-warning-400a',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-color-warning-500',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-color-warning-600',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-color-warning-700',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-color-warning-800',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-color-warning-900',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-color-pro-100',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-color-pro-100a',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-color-pro-200',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-color-pro-200a',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-color-pro-300',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-color-pro-300a',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-color-pro-400',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-color-pro-400a',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-color-pro-500',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-color-pro-600',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-color-pro-700',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-color-pro-800',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-color-pro-900',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-color-accent-100',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-color-accent-100a',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-color-accent-200',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-color-accent-200a',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-color-accent-300',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-color-accent-300a',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-color-accent-400',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-color-accent-400a',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-color-accent-500',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-color-accent-600',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-color-accent-700',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-color-accent-800',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-color-accent-900',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-color-premium',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-color-info',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-color-white',
      extra: 'ola-bg-neutral-900 ola-font-5-medium',
    },
  ]

  return (
    <Table>
      {
        colors.map((color, index) =>
          <tr key={index}>
            <td
              onClick={() => _copyToClipboard(color.className)}
              style={{ cursor: 'pointer' }}>
              <pre>{color.className}</pre>
            </td>
            <td>
              <div className={`${color.className} ${color.extra}`}>
                {styles.getPropertyValue(color.className.replace('ola-', '--'))}
              </div>
            </td>
            <td><pre>&lt;div className=&quot;{color.className}&quot;&gt;...&lt;/div&gt;</pre></td>
          </tr>)
      }
    </Table>)
}

export const BackgroundColors = () => {
  const [styles, setStyles] = useState({ getPropertyValue: () => '' })

  useEffect(() => {
    setStyles(getComputedStyle(document.querySelector('.ola')))
  }, [document])

  const bgs = [
    {
      className: 'ola-bg-primary-100',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-bg-primary-100a',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-bg-primary-200',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-bg-primary-200a',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-bg-primary-300',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-bg-primary-300a',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-bg-primary-400',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-bg-primary-400a',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-bg-primary-500',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-bg-primary-600',
      extra: 'ola-color-white ola-font-5-medium',
    },
    {
      className: 'ola-bg-primary-700',
      extra: 'ola-color-white ola-font-5-medium',
    },
    {
      className: 'ola-bg-primary-800',
      extra: 'ola-color-white ola-font-5-medium',
    },
    {
      className: 'ola-bg-primary-900',
      extra: 'ola-color-white ola-font-5-medium',
    },
    {
      className: 'ola-bg-neutral-100',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-bg-neutral-100a',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-bg-neutral-200',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-bg-neutral-200a',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-bg-neutral-300',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-bg-neutral-300a',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-bg-neutral-400',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-bg-neutral-400a',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-bg-neutral-500',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-bg-neutral-600',
      extra: 'ola-color-white ola-font-5-medium',
    },
    {
      className: 'ola-bg-neutral-700',
      extra: 'ola-color-white ola-font-5-medium',
    },
    {
      className: 'ola-bg-neutral-800',
      extra: 'ola-color-white ola-font-5-medium',
    },
    {
      className: 'ola-bg-neutral-900',
      extra: 'ola-color-white ola-font-5-medium',
    },
    {
      className: 'ola-bg-positive-100',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-bg-positive-100a',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-bg-positive-200',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-bg-positive-200a',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-bg-positive-300',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-bg-positive-300a',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-bg-positive-400',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-bg-positive-400a',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-bg-positive-500',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-bg-positive-600',
      extra: 'ola-color-white ola-font-5-medium',
    },
    {
      className: 'ola-bg-positive-700',
      extra: 'ola-color-white ola-font-5-medium',
    },
    {
      className: 'ola-bg-positive-800',
      extra: 'ola-color-white ola-font-5-medium',
    },
    {
      className: 'ola-bg-positive-900',
      extra: 'ola-color-white ola-font-5-medium',
    },
    {
      className: 'ola-bg-negative-100',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-bg-negative-100a',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-bg-negative-200',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-bg-negative-200a',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-bg-negative-300',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-bg-negative-300a',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-bg-negative-400',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-bg-negative-400a',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-bg-negative-500',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-bg-negative-600',
      extra: 'ola-color-white ola-font-5-medium',
    },
    {
      className: 'ola-bg-negative-700',
      extra: 'ola-color-white ola-font-5-medium',
    },
    {
      className: 'ola-bg-negative-800',
      extra: 'ola-color-white ola-font-5-medium',
    },
    {
      className: 'ola-bg-negative-900',
      extra: 'ola-color-white ola-font-5-medium',
    },
    {
      className: 'ola-bg-warning-100',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-bg-warning-100a',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-bg-warning-200',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-bg-warning-200a',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-bg-warning-300',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-bg-warning-300a',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-bg-warning-400',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-bg-warning-400a',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-bg-warning-500',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-bg-warning-600',
      extra: 'ola-color-white ola-font-5-medium',
    },
    {
      className: 'ola-bg-warning-700',
      extra: 'ola-color-white ola-font-5-medium',
    },
    {
      className: 'ola-bg-warning-800',
      extra: 'ola-color-white ola-font-5-medium',
    },
    {
      className: 'ola-bg-warning-900',
      extra: 'ola-color-white ola-font-5-medium',
    },
    {
      className: 'ola-bg-pro-100',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-bg-pro-100a',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-bg-pro-200',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-bg-pro-200a',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-bg-pro-300',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-bg-pro-300a',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-bg-pro-400',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-bg-pro-400a',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-bg-pro-500',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-bg-pro-600',
      extra: 'ola-color-white ola-font-5-medium',
    },
    {
      className: 'ola-bg-pro-700',
      extra: 'ola-color-white ola-font-5-medium',
    },
    {
      className: 'ola-bg-pro-800',
      extra: 'ola-color-white ola-font-5-medium',
    },
    {
      className: 'ola-bg-pro-900',
      extra: 'ola-color-white ola-font-5-medium',
    },
    {
      className: 'ola-bg-accent-100',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-bg-accent-100a',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-bg-accent-200',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-bg-accent-200a',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-bg-accent-300',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-bg-accent-300a',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-bg-accent-400',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-bg-accent-400a',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-bg-accent-500',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-bg-accent-600',
      extra: 'ola-color-white ola-font-5-medium',
    },
    {
      className: 'ola-bg-accent-700',
      extra: 'ola-color-white ola-font-5-medium',
    },
    {
      className: 'ola-bg-accent-800',
      extra: 'ola-color-white ola-font-5-medium',
    },
    {
      className: 'ola-bg-accent-900',
      extra: 'ola-color-white ola-font-5-medium',
    },
    {
      className: 'ola-bg-premium',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-bg-info',
      extra: 'ola-font-5-medium',
    },
    {
      className: 'ola-bg-white-100',
      extra: 'ola-bg-neutral-900 ola-font-5-medium',
    },
    // {
    //   name: 'Brand',
    //   className: 'ola-bg-primary-500',
    //   extra: 'ola-color-white ola-font-5-medium'
    // },
    // {
    //   name: 'Accent',
    //   className: 'ola-bg-accent-500',
    //   extra: 'ola-color-white ola-font-5-medium'
    // },
    // {
    //   name: 'White',
    //   className: 'ola-bg-white-100',
    //   extra: 'ola-bg-neutral-900 ola-color-white ola-font-5-medium'
    // },
    // {
    //   name: 'Black',
    //   className: 'ola-bg-neutral-900',
    //   extra: 'ola-color-white ola-font-5-medium'
    // },
    // {
    //   name: 'Gray',
    //   className: 'ola-bg-neutral-700',
    //   extra: 'ola-color-white ola-font-5-medium'
    // },
    // {
    //   name: 'Gray Light',
    //   className: 'ola-bg-neutral-400',
    //   extra: 'ola-font-5-medium'
    // },
    // {
    //   name: 'Gray XLight',
    //   className: 'ola-bg-neutral-200',
    //   extra: 'ola-font-5-medium'
    // },
    // {
    //   name: 'Gray XXLight',
    //   className: 'ola-bg-neutral-100',
    //   extra: 'ola-font-5-medium'
    // },
    // {
    //   name: 'Error',
    //   className: 'ola-bg-negative-500',
    //   extra: 'ola-color-white ola-font-5-medium'
    // },
    // {
    //   name: 'Warning',
    //   className: 'ola-bg-warning-500',
    //   extra: 'ola-color-white ola-font-5-medium'
    // },
    // {
    //   name: 'Success',
    //   className: 'ola-bg-positive-500',
    //   extra: 'ola-color-white ola-font-5-medium'
    // },
    // {
    //   name: 'Pro',
    //   className: 'ola-bg-pro-500',
    //   extra: 'ola-color-white ola-font-5-medium'
    // },
  ]

  return (
    <Table>
      {
        bgs.map((bg, index) =>
          <tr key={index}>
            <td onClick={() => _copyToClipboard(bg.className)} style={{ cursor: 'pointer' }}><pre>{bg.className}</pre></td>
            <td><div className={`${bg.className} ${bg.extra}`}>
              {styles.getPropertyValue(bg.className.replace('ola-bg-', '--color-'))}
            </div></td>
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
        <div className="ola-font-1-regular ola-color-neutral-700 ola-black-bolds" style={{ whiteSpace: 'normal' }}>
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
