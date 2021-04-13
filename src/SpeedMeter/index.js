import React from 'react'
import { default as PT } from 'prop-types'
import cx from 'classnames'
import Tag from '../Tag'

const diameter = Math.PI * (90 * 2)
const semi_diameter = diameter / 2

const scoreValue = (value) => {
  const meter_value = semi_diameter - ((value * semi_diameter)/ 30)
  return meter_value
}

const showBusyContent = (busy) => {
  if (busy) {
    const busyIsNode = React.isValidElement(busy)
    const busyIsString = typeof (busy) === 'string'
    return busyIsNode || busyIsString
  }
  return false
}

const SpeedMeter = ({ mark, value, level, busy, title, className, ...props }) => {
  let decimal

  if (!Number.isInteger(value)) {
    decimal = (value % 1).toFixed(1).substr(1)
    value = Math.floor(value)
  }

  const circleStyle = {
    strokeDasharray: scoreValue(value) + ',' + diameter
  }
  const positionArrow = {
    transform: 'rotate(' + (((scoreValue(value) * 180) / 30)) + 'deg)'
  }

  return (
    <div className={cx('ola_speedmeter', { 'is-busy': busy }, className)} {...props}>
      <svg viewBox="0 0 188 94" width="188" height="94">
        <g fillRule="nonzero" fill="none">
          <path className="ola_speedmeter-circle-background" d="M184 90c0-45.475-40.295-82.34-90-82.34S4 44.525 4 90" strokeDasharray="283, 566" />
          <path className="ola_speedmeter-circle-value-high" d="M184 90c0-45.475-40.295-82.34-90-82.34S4 44.525 4 90" stroke="#17AB4D" strokeDasharray="283, 566" />
          <path className="ola_speedmeter-circle-value-medium" d="M184 90c0-45.475-40.295-82.34-90-82.34S4 44.525 4 90" stroke="#D7800F" strokeDasharray="189, 566" />
          <path className="ola_speedmeter-circle-value-low" d="M184 90c0-45.475-40.295-82.34-90-82.34S4 44.525 4 90" stroke="#DE0220" strokeDasharray="80, 566"/>
          <path className="ola_speedmeter-circle-mask" d="M184 90c0-45.475-40.295-82.34-90-82.34S4 44.525 4 90" style={circleStyle}/>
          <path className="" d="M184 90c0-45.475-40.295-82.34-90-82.34S4 44.525 4 90" strokeDasharray="2, 142" stroke="#F0F2F4" strokeWidth="9"/>
          <path className="ola_speedmeter-triangle" fill="#D8D8D8" d="M94 19.149l10.465 13.404h-20.93z" style={positionArrow}/>
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
