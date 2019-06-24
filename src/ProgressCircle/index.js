import React from 'react'
import {default as PT} from 'prop-types'
import cx from 'classnames'

const ProgressCircle = ({ value, busy, extraClass, ...props }) => {
  return (
    <div className={cx('ola_progressCircle', {'is-busy': busy}, extraClass)} {...props}>
      <strong className="ola_progressCircle-value">{value}<span>%</span></strong>
      <svg className="ola_progressCircle-circle" width="140" height="140" viewbox="0 0 140 140">
        <circle r="62" cx="70" cy="70" className="ola_progressCircle-circle-background"></circle>
        <circle r="62" cx="70" cy="70" className="ola_progressCircle-circle-value"></circle>
      </svg>
    </div>
  )
}


ProgressCircle.defaultProps = {
  value: null,
  busy: false,
  extraClass: null
}

ProgressCircle.propTypes = {
  /** Value of progress */
  value: PT.number,
  /** Busy or loading */
  busy: PT.bool,
  /** Extra className */
  extraClass: PT.string
}

export { ProgressCircle }
