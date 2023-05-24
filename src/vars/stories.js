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
    '--font-name-1', '--font-name-2', '--font-family-1', '--font-family-2', '--font-line-height-0', 
    '--font-line-height-1', '--font-line-height-2', '--font-line-height-3', '--font-line-height-4', 
    '--font-line-height-5', '--font-line-height-6', '--font-line-height-7', '--font-line-height-8', 
    '--font-letter-spacing-0', '--font-letter-spacing-1', '--font-letter-spacing-2', '--font-letter-spacing-3', 
    '--font-letter-spacing-4', '--font-letter-spacing-5', '--font-letter-spacing-6', '--font-letter-spacing-7',
    '--font-letter-spacing-8', '--font-size-0', '--font-size-1', '--font-size-2', '--font-size-3', 
    '--font-size-4', '--font-size-5', '--font-size-6', '--font-size-7', '--font-size-8', '--font-weight-regular',
    '--font-weight-medium', '--font-weight-bold', '--font-0-regular', '--font-0-bold', '--font-1-regular', 
    '--font-1-bold', '--font-2-regular', '--font-2-bold', '--font-3-regular', '--font-3-bold', 
    '--font-4-regular', '--font-4-bold', '--font-5-medium', '--font-6-medium', '--font-7-medium', '--font-8-medium']

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
    '--color-primary-100', '--color-primary-100a', '--color-primary-200', '--color-primary-200a', 
    '--color-primary-300', '--color-primary-300a', '--color-primary-400', '--color-primary-400a', 
    '--color-primary-500', '--color-primary-600', '--color-primary-700', '--color-primary-800', '--color-primary-900', 
    '--color-neutral-100', '--color-neutral-100a', '--color-neutral-200', '--color-neutral-200a', 
    '--color-neutral-300', '--color-neutral-300a', '--color-neutral-400', '--color-neutral-400a', 
    '--color-neutral-500', '--color-neutral-600', '--color-neutral-700', '--color-neutral-800', 
    '--color-neutral-900', '--color-positive-100', '--color-positive-100a', '--color-positive-200', 
    '--color-positive-200a', '--color-positive-300', '--color-positive-300a', '--color-positive-400', 
    '--color-positive-400a', '--color-positive-500', '--color-positive-600', '--color-positive-700', 
    '--color-positive-800', '--color-positive-900', '--color-negative-100', '--color-negative-100a', 
    '--color-negative-200', '--color-negative-200a', '--color-negative-300', '--color-negative-300a', 
    '--color-negative-400', '--color-negative-400a', '--color-negative-500', '--color-negative-600', 
    '--color-negative-700', '--color-negative-800', '--color-negative-900', '--color-warning-100', 
    '--color-warning-100a', '--color-warning-200', '--color-warning-200a', '--color-warning-300', 
    '--color-warning-300a', '--color-warning-400', '--color-warning-400a', '--color-warning-500', 
    '--color-warning-600', '--color-warning-700', '--color-warning-800', '--color-warning-900', '--color-pro-100', 
    '--color-pro-100a', '--color-pro-200', '--color-pro-200a', '--color-pro-300', '--color-pro-300a', 
    '--color-pro-400', '--color-pro-400a', '--color-pro-500', '--color-pro-600', '--color-pro-700', 
    '--color-pro-800', '--color-pro-900', '--color-accent-100', '--color-accent-100a', '--color-accent-200', 
    '--color-accent-200a', '--color-accent-300', '--color-accent-300a', '--color-accent-400', '--color-accent-400a', 
    '--color-accent-500', '--color-accent-600', '--color-accent-700', '--color-accent-800', '--color-accent-900', 
    '--color-premium', '--color-info', '--color-white-100', '--color-pict-blue-100', '--color-pict-blue-500', 
    '--color-pict-blue-600', '--color-pict-blue-700', '--color-pict-brown-500', '--color-pict-brown-600', 
    '--color-pict-brown-700', '--color-pict-green-500', '--color-pict-green-600', '--color-pict-red-100', 
    '--color-pict-red-500', '--color-pict-red-600', '--color-pict-white', '--color-pict-yellow-100', 
    '--color-pict-yellow-500', '--color-chart-0', '--color-chart-1', '--color-chart-2', '--color-chart-3', 
    '--color-chart-4', '--color-chart-5']

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
    '--size-0', '--size-1', '--size-2', '--size-3', '--size-4', '--size-5', '--size-6', '--size-7', 
    '--size-8', '--size-9', '--size-10', '--size-12', '--size-14', '--size-16', '--size-20', '--max-width']

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
    '--shadow-line', '--shadow-level-1', '--shadow-level-2', '--shadow-level-3', '--drop-shadow-line', 
    '--drop-shadow-level-1', '--drop-shadow-level-2', '--drop-shadow-level-3', '--shadow-focus', 
    '--shadow-focus-negative', '--shadow-focus-pro']

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
    '--radius-s',
    '--radius-m',
    '--radius-xl',
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