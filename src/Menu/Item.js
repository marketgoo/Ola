import React from 'react'
import {default as PT} from 'prop-types'
import cx from 'classnames'
import { getElementType } from '../utils'

const Item = ({ as, className, variant, children, ...props }) => {
  const ElementType = getElementType(Item, { as: as, ...props })
  delete props['as']
  return (
    <li className={cx(variant && `ola_menu-${variant}`)}>
      <ElementType className={ cx('ola_menu-option', className) } {...props}>
        {children}
      </ElementType>
    </li>
  )
}


Item.defaultProps = {
  variant: null,
  as: 'span',
}

Item.propTypes = {
  /** Render Item with any html tag */
  as: PT.string,
  /** Item variants */
  variant: PT.oneOf(['separator']),
  /** Extra className */
  className: PT.string,
  /** Childen nodes */
  children: PT.oneOfType([
    PT.string,
    PT.arrayOf(PT.node),
    PT.node
  ]).isRequired
}

export default Item
