import React from 'react'
import {default as PT} from 'prop-types'
import cx from 'classnames'

const CheckGroup = ({ variant, children, className, ...props }) => {
  // Delete any error prop inherited from Field
  if(props.error) delete props['error'] // eslint-disable-line react/prop-types
  return (
    <div role="radiogroup" className={cx('ola_checkGroup', variant && `is-${variant}`, className)} { ...props }>
      { children }
    </div>
  )
}

CheckGroup.defaultProps = {
  variant: 'row',
  className: null,
}

CheckGroup.propTypes = {
  variant: PT.oneOf(['row', 'column', 'list']),
  /** Extra className */
  className: PT.string,
  /** Childen nodes */
  children: PT.oneOfType([
    PT.string,
    PT.arrayOf(PT.node),
    PT.node
  ]).isRequired
}

export default CheckGroup
