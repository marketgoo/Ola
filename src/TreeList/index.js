import React from 'react'
import { default as PT } from 'prop-types'
import cx from 'classnames'


const TreeList = ({ className, children, ...props }) =>
  <ul className={cx('ola_treeList', className)} {...props}>
    {children}
  </ul>


TreeList.defaultProps = {
  className: null,
}

TreeList.propTypes = {
  /** Extra className */
  className: PT.string,
  /** Childen nodes */
  children: PT.oneOfType([
    PT.string,
    PT.arrayOf(PT.node),
    PT.node
  ]).isRequired,
}

export default TreeList
