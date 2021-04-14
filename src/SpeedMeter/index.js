import React from 'react'
import { default as PT } from 'prop-types'
import cx from 'classnames'

const scoreValue = (value) => {
  value = Math.min(100, Math.max(0, value))
  const diameter = Math.PI * 90
  return ((100 - value) / 100) * (- diameter)
}

const scoreLevel = (value, breakpoint) => {
  if (value <= breakpoint) {
    return 'success'
  }
  if (value >= breakpoint * 2) {
    return 'error'
  }
  return 'warning'
}

const showBusyContent = (busy) => {
  if (busy) {
    const busyIsNode = React.isValidElement(busy)
    const busyIsString = typeof (busy) === 'string'
    return busyIsNode || busyIsString
  }
  return false
}

const SpeedMeter = ({ breakpoint, value, level, busy, title, className, ...props }) => {
  let decimal

  if (!Number.isInteger(value)) {
    decimal = (value % 1).toFixed(1).substr(1)
    value = Math.floor(value)
  }

  const circleStyle = {
    strokeDashoffset: scoreValue(value)
  }
  const variant = scoreLevel(value, breakpoint)
  const positionArrow = {
    transform: 'rotate(' + (scoreValue(value) -180) + 'deg)'
  }

  return (
    <div className={cx('ola_speedmeter', `is-${variant}`, { 'is-busy': busy }, className)} {...props}>
      <svg viewBox="0 0 188 94" width="188" height="94">
        <g fillRule="nonzero" fill="none">
          <path className="ola_speedmeter-circle-background" d="M184 90c0-45.475-40.295-82.34-90-82.34S4 44.525 4 90" />
          <path className="ola_speedmeter-circle-value" d="M184 90c0-45.475-40.295-82.34-90-82.34S4 44.525 4 90" style={circleStyle}/>
          <path className="ola_speedmeter-triangle" d="M94 19.149l10.465 13.404h-20.93z" style={positionArrow}/>
          <path className="ola_speedmeter-breakpoint" stroke="#979797" strokeWidth="2" fill="#979797" d="M94 0v15.319"/>
        </g>
      </svg>
    </div>
  )
}


SpeedMeter.defaultProps = {
  value: null,
  title: null,
  level: null,
  busy: false,
  className: null
}

SpeedMeter.propTypes = {
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
  title: PT.string
}

export default SpeedMeter
