import React from 'react'
import {default as PT} from 'prop-types'
import cx from 'classnames'

const CheckGroup = ({ variant, children, extraClass, ...props }) => {
  return (
    <div role="radiogroup" className={cx('ola_checkGroup', variant && `is-${variant}`, extraClass)} { ...props }>
      { children }
    </div>
  )
}

CheckGroup.defaultProps = {
  variant: 'row',
  extraClass: null,
}

CheckGroup.propTypes = {
  variant: PT.oneOf(['row', 'column', 'list']),
  /** Extra className */
  extraClass: PT.string,
  /** Childen nodes */
  children: PT.oneOfType([
    PT.string,
    PT.arrayOf(PT.node),
    PT.node
  ]).isRequired
}

export default CheckGroup
