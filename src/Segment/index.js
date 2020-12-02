import React from 'react'
import {default as PT} from 'prop-types'
import cx from 'classnames'

const Segment = ({ className, children, ...props }) => {
  const styles = cx('ola_segment', className)

  return (
    <nav className={styles} {...props}>
      { children }
    </nav>
  )
}

Segment.defaultProps = {
  className: null
}

Segment.propTypes = {
  /** Extra className */
  className: PT.string,
  /** Childen nodes */
  children: PT.oneOfType([
    PT.string,
    PT.arrayOf(PT.node),
    PT.node
  ]).isRequired
}

export default Segment
