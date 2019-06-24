import React from 'react'
import {default as PT} from 'prop-types'
import cx from 'classnames'

const Tag = ({ variant, extraClass, children }) =>
  <span className={cx('ola_tag', variant && `is-${variant}`, extraClass)}>
    {children}
  </span>

Tag.defaultProps = {
  variant: null
}

Tag.propTypes = {
  /** Tag variants */
  variant: PT.oneOf(['invert', 'error', 'pro', 'success', 'warning']),
  /** Extra className */
  extraClass: PT.string,
  /** Childen nodes */
  children: PT.oneOfType([
    PT.string,
    PT.arrayOf(PT.node),
    PT.node
  ]).isRequired
}

export { Tag }
