import React from 'react'
import {default as PT} from 'prop-types'
import cx from 'classnames'

const Tab = ({ className, children, ...props }) => {
  return (
    <div className={cx('ola_tab', className)} {...props}>
      {children}
    </div>
  )
}

Tab.propTypes = {
  /** Extra className */
  className: PT.string,
  /** Childen nodes */
  children: PT.oneOfType([
    PT.arrayOf(PT.node),
    PT.node
  ]).isRequired
}

export default Tab
