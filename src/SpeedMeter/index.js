import React from 'react'
import { default as PT } from 'prop-types'
import cx from 'classnames'

const scoreValue = (value) => {
  const diameter = Math.PI * 88
  return ((100 - value) / 100) * (- diameter)
}

const angleValue = (value) => {
  return -(90 - (180 * (value / 100)))
}

const percentageValue = (value, min, max) => {
  let percentage = ((value - Math.min(min, max)) / (Math.max(min, max) - Math.min(min, max))) * 100

  return (percentage > 0) ? Math.max(1, percentage) : percentage
}

const showBusyContent = (busy) => {
  if (busy) {
    const busyIsNode = React.isValidElement(busy)
    const busyIsString = typeof (busy) === 'string'
    return busyIsNode || busyIsString
  }
  return false
}

const SpeedMeter = ({ breakpoint, value, min, max, unit, busy, variant, className, ...props }) => {
  let decimal

  //Force the value between min and max
  value = Math.min(max, Math.max(min, value))

  //Calculate the percentage
  const percentage = percentageValue(value, min, max)
  
  if (!Number.isInteger(value)) {
    decimal = (value % 1).toFixed(1).substr(1)
  }
  const circleStyle = {
    strokeDashoffset: scoreValue(percentage)
  }

  const positionArrow = {
    transform: 'rotate(' + angleValue(percentage) + 'deg)'
  }
  const positionBreakpoint = {
    transform: 'rotate(' + angleValue(percentageValue(breakpoint, min, max)) + 'deg)'
  }

  return (
    <div className={cx('ola_speedmeter', `is-${variant}`, { 'is-busy': busy }, className)} {...props}>
      {!busy && (value !== null) && <div className="ola_speedmeter-metric">
        <strong className="ola_speedmeter-value">{Math.floor(value)}{decimal}</strong>
        <strong className="ola_speedmeter-unit">{unit}</strong>
      </div>}
      {showBusyContent(busy) && <span className="ola_score-busy">{busy}</span>}
      <svg className="ola_speedmeter-circle" viewBox="0 0 190 110" width="190" height="110">
        <path className="ola_speedmeter-circle-background" d="M183,95 C183,46.398942 143.601058,7 95,7 C46.398942,7 7,46.398942 7,95" />
        <path className="ola_speedmeter-circle-value" d="M183,95 C183,46.398942 143.601058,7 95,7 C46.398942,7 7,46.398942 7,95" style={circleStyle} />
        <polygon className="ola_speedmeter-triangle" points="95 14 103 26 87 26" style={positionArrow} />
        <line className="ola_speedmeter-breakpoint" x1="95" y1="0" x2="95" y2="16" style={positionBreakpoint}></line>
      </svg>
    </div>
  )
}


SpeedMeter.defaultProps = {
  breakpoint: null,
  value: null,
  min: 0,
  max: 100,
  unit: null,
  busy: false,
  variant: null,
  className: null
}

SpeedMeter.propTypes = {
  /** Breakpoint of speedmeter */
  breakpoint: PT.number,
  /** Value of speedmeter */
  value: PT.number,
  /** Min value of speedmeter */
  min: PT.number,
  /** Max value of speedmeter */
  max: PT.number,
  /** Unit of value speedmeter */
  unit: PT.string,
  /** Busy or loading */
  busy: PT.oneOfType([
    PT.string,
    PT.bool
  ]),
  /** Unit of value speedmeter */
  variant: PT.string,
  /** Extra className */
  className: PT.string
}

export default SpeedMeter
