import React from 'react'
import {default as PT} from 'prop-types'
import cx from 'classnames'
import Tag from '../Tag'

const scoreValue = (value) => {
  value = Math.min(100, Math.max(0, value))
  const diameter = Math.PI * (86 * 2)
  return ((100 - value) / 100) * diameter
}

const scoreLevel = (value) => {
  if (value < 50) {
    return 'error'
  }
  if (value < 85) {
    return 'warning'
  }
  return 'success'
}

const showBusyContent = (busy) => {
  if(busy) {
    const busyIsNode = React.isValidElement(busy)
    const busyIsString = typeof(busy) === 'string'
    return busyIsNode || busyIsString
  }
  return false
}

const Score = ({ value, level, busy, title, backgroundColor, supColor, className, ...props }) => {
  let decimal

  if (!Number.isInteger(value)) {
    decimal = (value % 1).toFixed(1).substr(1)
    value = Math.floor(value)
  }

  const circleStyle = {
    strokeDashoffset: scoreValue(value)
  }

  const variant = scoreLevel(value)

  return (
    <div className={cx('ola_score', `is-${variant}`, {'is-busy': busy}, className)} {...props}>
      { !busy && title && <strong className="ola_score-title">{title}</strong> }
      { !busy && (value !== null) &&  <strong className="ola_score-value">{value}<sup className={`is-${supColor}`}>{ decimal || '%' }</sup></strong> }
      { !busy && (value !== null) && level && <div className="ola_score-level"><Tag variant={variant}>{level}</Tag></div> }
      { showBusyContent(busy) && <span className="ola_score-busy">{busy}</span> }
      <svg className="ola_score-circle" width="180" height="180" viewBox="0 0 180 180">
        <circle r="86" cx="90" cy="90" className={`ola_score-circle-background is-${backgroundColor}`}></circle>
        <circle r="86" cx="90" cy="90" className="ola_score-circle-value" style={circleStyle}></circle>
      </svg>
    </div>
  )
}


Score.defaultProps = {
  value: null,
  title: null,
  level: null,
  busy: false,
  className: null,
  backgroundColor: 'gray-xlight',
  supColor: 'gray-light',
}

Score.propTypes = {
  /** Value of score */
  value: PT.number,
  /** Level of score */
  level: PT.string,
  /** Busy or loading */
  busy: PT.oneOfType([
    PT.string,
    PT.bool
  ]),
  /** Extra className */
  className: PT.string,
  /** Title */
  title: PT.string,
  backgroundColor: PT.string,
  supColor: PT.string
}

export default Score
