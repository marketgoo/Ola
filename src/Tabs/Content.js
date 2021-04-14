import React from 'react'
import {default as PT} from 'prop-types'
import cx from 'classnames'

const TabContent = ({ className, selected, children, ...props }) => {
  return (
    <div className={cx('ola_tab-content', selected && 'selected', className)} {...props}>
      {children}
    </div>
  )
}

TabContent.defaultProps = {
  selected: null
}

TabContent.propTypes = {
  /** Extra className */
  className: PT.string,
  /** TabContent selected */
  selected: PT.bool,
  /** Childen nodes */
  children: PT.oneOfType([
    PT.arrayOf(PT.node),
    PT.node
  ]).isRequired
}

export default TabContent
