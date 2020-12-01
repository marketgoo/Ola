import React from 'react'
import {default as PT} from 'prop-types'
import cx from 'classnames'

const Level = ({ variant, size }) => {
  const styles = cx(
    'ola_level',
    variant && `is-${variant}`,
    size === "medium" ? null : `is-${size}`
  )

  return (
    <span className={styles}></span>
  )
}

Level.defaultProps = {
  variant: null,
  size: 'medium',
}

Level.propTypes = {
  /** Level variants */
  variant: PT.oneOf(['low', 'medium', 'high']),
  /** Level sizes */
  size: PT.oneOf(['small', 'medium']),
}

export default Level
