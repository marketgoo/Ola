import React from 'react'
import {default as PT} from 'prop-types'
import cx from 'classnames'

const Level = ({ variant }) => {
  const styles = cx('ola_level', variant && `is-${variant}`)
  return (
    <span className={styles}></span>
  )
}

Level.defaultProps = {
  variant: null
}

Level.propTypes = {
  /** Level variants */
  variant: PT.oneOf(['low', 'medium', 'high']),
}

export default Level
