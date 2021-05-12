import React from 'react'
import { default as PT } from 'prop-types'
import cx from 'classnames'

const Level = ({ type, variant, size }) => {
  const styles = cx(
    'ola_level',
    variant && `is-${variant}`,
    size === 'medium' ? null : `is-${size}`,
    `is-${type}`
  )

  return (
    type === 'three_levels' ?
      <span className={styles}></span> :
      <div className={styles}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
  )
}

Level.defaultProps = {
  type: 'three_levels',
  variant: null,
  size: 'medium',
}

Level.propTypes = {
  /** Level types */
  type: PT.oneOf(['three_levels', 'four_levels']),
  /** Level variants */
  variant: PT.oneOf(['low', 'medium', 'high', 'highest']),
  /** Level sizes */
  size: PT.oneOf(['small', 'medium']),
}

export default Level
