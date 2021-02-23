import React from 'react'
import {default as PT} from 'prop-types'
import cx from 'classnames'

const Axis = ({ max, steps, className }) => {
  const styles = cx('ola_chartLine-axis', className)
  const step = max / steps
  const children = new Array(steps + 1).fill(null)
    .map((v, index) => <span key={index}>{Math.round(index * step)}</span>)
  
  return (
    <div className={styles}>
      { children }
    </div>
  )
}

Axis.defaultProps = {
  steps: 4,
  max: null,
  className: null
}

Axis.propTypes = {
  /** Max value */
  max: PT.number.isRequired,
  /** Number of steps */
  steps: PT.number,
  /** Extra className */
  className: PT.string,
}

export default Axis