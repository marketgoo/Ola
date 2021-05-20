import React from 'react'
import { default as PT } from 'prop-types'
import cx from 'classnames'

const Level = ({ variant, size }) => {
  const styles = cx(
    'ola_level',
    variant && `is-${variant}`,
    `is-size_${size}`
  )

  return (
    <div className={styles}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}

Level.defaultProps = {
  variant: null,
  size: 'medium',
}

Level.propTypes = {
  /** Level variants */
  variant: PT.oneOf(['low', 'medium', 'high', 'highest']),
  /** Level sizes */
  size: PT.oneOf(['small', 'medium', 'xbig']),
}

export default Level
