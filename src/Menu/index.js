import React from 'react'
import {default as PT} from 'prop-types'
import cx from 'classnames'

const Menu = ({ className, children }) =>
  <ul className={cx('ola_menu', className)}>{children}</ul>

Menu.propTypes = {
  /** Extra className */
  className: PT.string,
  /** Childen nodes */
  children: PT.oneOfType([
    PT.string,
    PT.arrayOf(PT.node),
    PT.node
  ]).isRequired
}

export default Menu
