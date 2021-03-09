import React from 'react'
import {default as PT} from 'prop-types'
import cx from 'classnames'

const ChartLineAxis = ({ max, steps, className }) => {
  const styles = cx('ola_chartLine-axis', className)

  steps = Math.min(max, steps)

  const step = max / steps
  const children = new Array(steps + 1).fill(null)
    .map((v, index) => <span key={index}>{Math.round(index * step * 10) / 10}</span>)
  
  return (
    <div className={styles}>
      { children }
    </div>
  )
}

ChartLineAxis.defaultProps = {
  steps: 4,
  max: null,
  className: null
}

ChartLineAxis.propTypes = {
  /** Max value */
  max: PT.number.isRequired,
  /** Number of steps */
  steps: PT.number,
  /** Extra className */
  className: PT.string,
}

export default ChartLineAxis
