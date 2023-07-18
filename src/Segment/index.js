import React from 'react'
import {default as PT} from 'prop-types'
import cx from 'classnames'
import SegmentButton from './SegmentButton'

const Segment = ({ className, children, ...props }) => {
  const styles = cx('ola_segment', className)

  return (
    <nav className={styles} {...props}>
      { children }
    </nav>
  )
}

Segment.Button = SegmentButton

Segment.defaultProps = {
  className: null
}

Segment.propTypes = {
  /** Extra className */
  className: PT.string,
  /** Child nodes */
  children: PT.oneOfType([
    PT.shape({ type: PT.oneOf([Segment.Button]) }),
    PT.arrayOf(PT.shape({ type: PT.oneOf([Segment.Button]) })),
  ]).isRequired
}

export default Segment
