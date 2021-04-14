import React from 'react'
import { default as PT } from 'prop-types'
import cx from 'classnames'

const scoreValue = (value) => {
  value = Math.min(100, Math.max(0, value))
  const diameter = Math.PI * 88
  return ((100 - value) / 100) * (- diameter)
}
const angleValue = (value) => {
  value = Math.min(100, Math.max(0, value))
  return -(90 - (180 * (value / 100)))
}

const scoreLevel = (value, breakpoint) => {
  if (value < breakpoint) {
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
    transform: 'rotate(' + (angleValue(value)) + 'deg)'
  }
  const positionBreakpoint = {
    transform: 'rotate(' + (angleValue(breakpoint)) + 'deg)'
  }

  return (
    <div className={cx('ola_speedmeter', `is-${variant}`, { 'is-busy': busy }, className)} {...props}>
      <svg viewBox="0 0 190 110" width="190" height="110">
        <path className="ola_speedmeter-circle-background" d="M183,95 C183,46.398942 143.601058,7 95,7 C46.398942,7 7,46.398942 7,95" />
        <path className="ola_speedmeter-circle-value" d="M183,95 C183,46.398942 143.601058,7 95,7 C46.398942,7 7,46.398942 7,95"  style={circleStyle} />
        <polygon className="ola_speedmeter-triangle" points="95 14 103 26 87 26" style={positionArrow} />
        <line className="ola_speedmeter-breakpoint" x1="95" y1="2" x2="95" y2="12" stroke="#979797" strokeWidth="2" style={positionBreakpoint}></line>
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
