import React from 'react'
import {default as PT} from 'prop-types'
import cx from 'classnames'

const progressCircleValue = (value) => {
  value = Math.min(100, Math.max(0, value))
  const diameter = Math.PI * (62 * 2)
  return ((100 - value) / 100) * diameter
}

const showBusyContent = (busy) => {
  if(busy) {
    const busyIsNode = React.isValidElement(busy)
    const busyIsString = typeof(busy) === 'string'
    return busyIsNode || busyIsString
  }
  return false
}

const ProgressCircle = ({ variant, value, description, busy, label, className, ...props }) => {

  const circleStyle = {
    strokeDashoffset: progressCircleValue(value)
  }

  return (
    <div className={cx('ola_progressCircle', variant && `is-${variant}`, {'is-busy': busy}, className)} {...props}>
      { !busy && label && <span className="ola_progressCircle-label">{label}</span> }
      { !busy && (value !== null) &&  <strong className="ola_progressCircle-value">{value}<span>%</span></strong> }
      { !busy && (value !== null) && description && <div className="ola_progressCircle-description">{description}</div> }
      { showBusyContent(busy) && <span className="ola_progressCircle-busy">{busy}</span> }
      <svg className="ola_progressCircle-circle" width="140" height="140" viewBox="0 0 140 140">
        <circle r="62" cx="70" cy="70" className="ola_progressCircle-circle-background"></circle>
        <circle r="62" cx="70" cy="70" className="ola_progressCircle-circle-value" style={circleStyle}></circle>
      </svg>
    </div>
  )
}


ProgressCircle.defaultProps = {
  variant: null,
  value: null,
  description: null,
  label: null,
  busy: false,
  className: null
}

ProgressCircle.propTypes = {
  /** Tag variants */
  variant: PT.oneOf(['error', 'success', 'warning']),
  /** Value of progress */
  value: PT.number,
  /** Description of progress */
  description: PT.oneOfType([
    PT.string, 
    PT.node
  ]),
  /** Busy or loading */
  busy: PT.oneOfType([
    PT.string,
    PT.bool
  ]),
  /** Extra className */
  className: PT.string,
  /** Label */
  label: PT.string
}

export default ProgressCircle
