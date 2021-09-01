import React from 'react'
import {default as PT} from 'prop-types'
import cx from 'classnames'

const ChartLineAxis = ({ max, steps, className, format }) => {
  const styles = cx('ola_chartLine-axis', className)

  steps = Math.min(max, steps)
  const decimals = max < steps * steps ? 10 : 1
  const step = max / steps
  const children = new Array(steps + 1).fill(null)
    .map((v, index) => <span key={index}>{format(Math.round(index * step * decimals) / decimals)}</span>)
  
  return (
    <div className={styles}>
      { children }
    </div>
  )
}

ChartLineAxis.defaultProps = {
  steps: 4,
  max: null,
  className: null,
  format:(num)=> num
}

ChartLineAxis.propTypes = {
  /** Max value */
  max: PT.number.isRequired,
  /** Number of steps */
  steps: PT.number,
  /** Extra className */
  className: PT.string,
  /** Function to return number */
  format:PT.func
}

export default ChartLineAxis
