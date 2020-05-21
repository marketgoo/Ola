import React from 'react'
import {default as PT} from 'prop-types'
import cx from 'classnames'

const Tag = ({ variant, className, size, children }) =>
  <span className={cx('ola_tag', variant && `is-${variant}`, `is-${size}`, className)}>
    {children}
  </span>

Tag.defaultProps = {
  variant: null,
  size: 'small'
}

Tag.propTypes = {
  /** Tag variants */
  variant: PT.oneOf(['invert', 'error', 'pro', 'success', 'warning']),
  /** Tag sizes */
  size: PT.oneOf(['small', 'medium', 'big']),
  /** Extra className */
  className: PT.string,
  /** Childen nodes */
  children: PT.oneOfType([
    PT.string,
    PT.arrayOf(PT.node),
    PT.node
  ]).isRequired
}

export default Tag
