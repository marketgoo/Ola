import React from 'react'
import {default as PT} from 'prop-types'
import cx from 'classnames'

const CheckGroup = ({ variant, children, className, error, ...props }) => {
  return (
    <div role="radiogroup" className={cx('ola_checkGroup', variant && `is-${variant}`, {'is-invalid': error}, className)} { ...props }>
      { children }
    </div>
  )
}

CheckGroup.defaultProps = {
  variant: 'row',
  className: null,
  error: false
}

CheckGroup.propTypes = {
  variant: PT.oneOf(['row', 'column', 'list']),
  /** Extra className */
  className: PT.string,
  /** Input is invalid */
  error: PT.bool,
  /** Childen nodes */
  children: PT.oneOfType([
    PT.string,
    PT.arrayOf(PT.node),
    PT.node
  ]).isRequired
}

export default CheckGroup
