import React from 'react'
import {default as PT} from 'prop-types'
import cx from 'classnames'
import { getElementType } from '../utils'

const MenuOption = ({ as, className, separator, children, variant, size, selected, ...props }) => {
  const ElementType = getElementType(MenuOption, { as: as, ...props })
  delete props['as']

  return (
    <li className={cx(separator && 'ola_menu-separator')}>
      <ElementType aria-current={selected} className={ cx(
        'ola_menu-option',
        className,
        {
          [`is-${variant}`]: variant,
          [`is-${size}`]: size,
          ['is-selected']: selected 
        }) } {...props}>
        {children}
      </ElementType>
    </li>
  )
}


MenuOption.defaultProps = {
  variant: null,
  size: 'medium',
  as: 'button',
}

MenuOption.propTypes = {
  /** Render Item with any html tag */
  as: PT.string,
  /** Option variants */
  variant: PT.oneOf(['option', 'nav']),
  /** Size variant */
  size: PT.oneOf(['small', 'medium']),
  /** Separator */
  separator: PT.bool,
  /** Selected */
  selected: PT.bool,
  /** Extra className */
  className: PT.string,
  /** Childen nodes */
  children: PT.oneOfType([
    PT.string,
    PT.arrayOf(PT.node),
    PT.node
  ]).isRequired
}

export default MenuOption
