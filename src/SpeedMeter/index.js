import React from 'react'
import { default as PT } from 'prop-types'
import cx from 'classnames'

const scoreValue = (value, breakpoint) => {
  value = Math.min(breakpoint*2, Math.max(0, value))
  value = ((value - Math.min(0, breakpoint*2))/(Math.max(0, breakpoint*2) - Math.min(0, breakpoint*2)))*100

  const diameter = Math.PI * 88
  return ((100 - value) / 100) * (- diameter)
}
const angleValue = (value, breakpoint) => {
  value = Math.min(breakpoint*2, Math.max(0, value))
  value = ((value - Math.min(0, breakpoint*2))/(Math.max(0, breakpoint*2) - Math.min(0, breakpoint*2)))*100

  breakpoint = ((breakpoint - Math.min(0, breakpoint*2))/(Math.max(0, breakpoint*2) - Math.min(0, breakpoint*2)))*100

  return {
    value: -(90 - (180 * (value / 100))),
    breakpoint: -(90 - (180 * (breakpoint / 100)))
  }
}

const scoreLevel = (value, breakpoint) => {
  if (value < breakpoint - 1) {
    return 'success'
  }
  if (value > breakpoint) {
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

const SpeedMeter = ({ breakpoint, value, unit, busy, className, ...props }) => {
  let decimal

  if (!Number.isInteger(value)) {
    decimal = (value % 1).toFixed(1).substr(1).toString().replace(/\./g,',')

    value = Math.floor(value)
  }

  const circleStyle = {
    strokeDashoffset: scoreValue(value, breakpoint)
  }
  const variant = scoreLevel(value, breakpoint)
  const positionArrow = {
    transform: 'rotate(' + (angleValue(value, breakpoint)['value']) + 'deg)'
  }
  const positionBreakpoint = {
    transform: 'rotate(' + (angleValue(value, breakpoint)['breakpoint']) + 'deg)'
  }

  return (
    <div className={cx('ola_speedmeter', `is-${variant}`, { 'is-busy': busy }, className)} {...props}>
      {!busy && (value !== null) && <div className="ola_speedmeter-metric">
        <strong className="ola_speedmeter-value">{value}{decimal}</strong>
        <strong className="ola_speedmeter-unit">{unit}</strong>
      </div>}
      { showBusyContent(busy) && <span className="ola_score-busy">{busy}</span> }
      <svg className="ola_speedmeter-circle" viewBox="0 0 190 110" width="190" height="110">
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
  breakpoint: null,
  unit: null,
  busy: false,
  className: null
}

SpeedMeter.propTypes = {
  /** Breakpoint of speedmeter */
  breakpoint: PT.number,
  /** Value of speedmeter */
  value: PT.number,
  /** Unit of value speedmeter */
  unit: PT.string,
  /** Busy or loading */
  busy: PT.oneOfType([
    PT.string,
    PT.bool
  ]),
  /** Extra className */
  className: PT.string
}

export default SpeedMeter
