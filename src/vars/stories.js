import React, { useEffect, useState } from 'react'
import { copyToClipboard } from '../utils'
import '../variables.css'

export default {
  title: 'Foundations/Variables'
}

const _copyToClipboard = (text) => {
  copyToClipboard(text)
  setTimeout(() => {
    alert(`Copied '${text}' to clipboard`)
  }, 100)
}

const Table = ({ children, example = false }) =>
  <table className='st-table' cellSpacing="0" cellPadding="0">
    <thead>
      <tr>
        <th>
          <span>Var Name</span>
          <span className='ola-brand' style={{
            display: 'block',
            fontSize: '12px',
            fontWeight: '500',
          }}>Click each one to copy to clipboard</span>
        </th>
        {example && <th>{example}</th>}
        <th>Value</th>
      </tr>
    </thead>

    <tbody>
      {children}
    </tbody>
  </table>

export const Fonts = () => {
  const [styles, setStyles] = useState({ getPropertyValue: () => '' })

  useEffect(() => {
    setStyles(getComputedStyle(document.querySelector('.ola')))
  }, [document])

  const vars = [
    '--font-brand-name', '--font-brand', '--font-ui', '--regular', '--bold',
    '--font-display-spacing', '--font-display-weight', '--font-title-spacing', '--font-title-weight',
    '--font-display', '--font-title', '--font-headline', '--font-body', '--font-callout',
    '--font-caption'
  ]

  return (
    <Table>
      {
        vars.map((varName, index) => (
          <tr key={index}>
            <td onClick={() => _copyToClipboard(varName)} style={{ cursor: 'pointer' }}><pre>{varName}</pre></td>
            <td>{styles.getPropertyValue(varName)}</td>
          </tr>
        ))
      }
    </Table>
  )
}

export const Colors = () => {
  const [styles, setStyles] = useState({ getPropertyValue: () => '' })

  useEffect(() => {
    setStyles(getComputedStyle(document.querySelector('.ola')))
  }, [document])

  const vars = [
    '--brand', '--brand-dark', '--brand-xdark', '--brand-focus', '--white', '--black', '--gray',
    '--gray-light', '--gray-xlight', '--gray-xxlight', '--error', '--error-dark', '--error-xdark',
    '--error-focus', '--warning', '--warning-focus', '--warning-dark', '--warning-xdark', '--success',
    '--success-focus', '--success-dark', '--success-xdark', '--pro', '--pro-dark', '--pro-xdark',
    '--pro-focus', '--premium', '--info', '--accent', '--accent-dark', '--accent-xdark',
    '--accent-focus', '--pict-blue-dark', '--pict-blue-light', '--pict-blue-xlight', '--pict-blue', '--pict-brown-dark',
    '--pict-brown-light', '--pict-brown', '--pict-green-dark', '--pict-green', '--pict-red-dark', '--pict-red-light',
    '--pict-red', '--pict-white', '--pict-yellow-light', '--pict-yellow', '--chart-0', '--chart-1',
    '--chart-2', '--chart-3', '--chart-4'
  ]

  return (
    <Table example="Color">
      {
        vars.map((varName, index) => (
          <tr key={index}>
            <td onClick={() => _copyToClipboard(varName)} style={{ cursor: 'pointer' }}><pre>{varName}</pre></td>
            <td><div style={{
              backgroundColor: styles.getPropertyValue(varName),
              width: '40px',
              height: '40px',
            }} /></td>
            <td>{styles.getPropertyValue(varName)}</td>
          </tr>
        ))
      }
    </Table>
  )
}

export const Sizes = () => {
  const [styles, setStyles] = useState({ getPropertyValue: () => '' })

  useEffect(() => {
    setStyles(getComputedStyle(document.querySelector('.ola')))
  }, [document])

  const vars = [
    '--size-1', '--size-2', '--size-3', '--size-4', '--size-5', '--size-6', '--size-7', '--size-8',
    '--size-9', '--size-10', '--size-11', '--size-12', '--size-13', '--max-width'
  ]

  return (
    <Table>
      {
        vars.map((varName, index) => (
          <tr key={index}>
            <td onClick={() => _copyToClipboard(varName)} style={{ cursor: 'pointer' }}><pre>{varName}</pre></td>
            <td>{styles.getPropertyValue(varName)}</td>
          </tr>
        ))
      }
    </Table>
  )
}

export const ColumnsAndRows = () => {
  const [styles, setStyles] = useState({ getPropertyValue: () => '' })

  useEffect(() => {
    setStyles(getComputedStyle(document.querySelector('.ola')))
  }, [document])

  const vars = [
    '--column-gap-1', '--column-gap-2', '--column-gap-3', '--row-gap-1', '--row-gap-2', '--row-gap-3', '--row-gap-4'
  ]

  return (
    <Table>
      {
        vars.map((varName, index) => (
          <tr key={index}>
            <td onClick={() => _copyToClipboard(varName)} style={{ cursor: 'pointer' }}><pre>{varName}</pre></td>
            <td>{styles.getPropertyValue(varName)}</td>
          </tr>
        ))
      }
    </Table>
  )
}

export const Shadows = () => {
  const [styles, setStyles] = useState({ getPropertyValue: () => '' })

  useEffect(() => {
    setStyles(getComputedStyle(document.querySelector('.ola')))
  }, [document])

  const vars = [
    '--shadow-line',
    '--shadow-1',
    '--shadow-2',
    '--shadow-3',
  ]

  return (
    <Table example="Example">
      {
        vars.map((varName, index) => (
          <tr key={index}>
            <td onClick={() => _copyToClipboard(varName)} style={{ cursor: 'pointer' }}><pre>{varName}</pre></td>
            <td><div style={{
              boxShadow: styles.getPropertyValue(varName),
              width: '40px',
              height: '40px',
            }} /></td>
            <td>{styles.getPropertyValue(varName)}</td>
          </tr>
        ))
      }
    </Table>
  )
}

export const BorderRadius = () => {
  const [styles, setStyles] = useState({ getPropertyValue: () => '' })

  useEffect(() => {
    setStyles(getComputedStyle(document.querySelector('.ola')))
  }, [document])

  const vars = [
    '--radius-big',
    '--radius',
    '--radius-small',
  ]

  return (
    <Table example="Example">
      {
        vars.map((varName, index) => (
          <tr key={index}>
            <td onClick={() => _copyToClipboard(varName)} style={{ cursor: 'pointer' }}><pre>{varName}</pre></td>
            <td><div style={{
              borderRadius: styles.getPropertyValue(varName),
              border: '1px solid black',
              width: '40px',
              height: '40px',
            }} /></td>
            <td>{styles.getPropertyValue(varName)}</td>
          </tr>
        ))
      }
    </Table>
  )
}