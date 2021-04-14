import React from 'react'
import {default as PT} from 'prop-types'
import cx from 'classnames'

const TabSelector = ({ className, children, ...props }) => {
  const styles = cx('ola_tab-selector', className)

  return (
    <nav className={styles} {...props}>
      { children }
    </nav>
  )
}

TabSelector.defaultProps = {
  className: null
}

TabSelector.propTypes = {
  /** Extra className */
  className: PT.string,
  /** Childen nodes */
  children: PT.oneOfType([
    PT.string,
    PT.arrayOf(PT.node),
    PT.node
  ]).isRequired
}

export default TabSelector
