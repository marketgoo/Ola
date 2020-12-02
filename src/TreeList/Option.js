import React from 'react'
import {default as PT} from 'prop-types'
import cx from 'classnames'

const TreeListOption = ({ className, children, ...props }) => {
  return (
    <li className={cx('ola_treeList-option', className)} {...props}>
      {children}
    </li>
  )
}

TreeListOption.defaultProps = {
  className: null,
}

TreeListOption.propTypes = {
  /** Extra className */
  className: PT.string,
  /** Childen nodes */
  children: PT.oneOfType([
    PT.string,
    PT.arrayOf(PT.node),
    PT.node
  ]).isRequired
}

export default TreeListOption
