import React from 'react'
import {default as PT} from 'prop-types'
import cx from 'classnames'

const ProgressCircle = ({ value, busy, extraClass, ...props }) => {
  return (
    <svg className={cx('ola_progressCircle', {'is-busy': busy}, extraClass)} {...props}>
      <circle className='ola_progressCircle-circle'>
        <g className='ola_progressCircle-circle-background'>
          <g className='ola_progressCircle-circle-value'>
            <text className='ola_progressCircle-value'>{value}</text>
          </g>
        </g>
      </circle>
    </svg>
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
