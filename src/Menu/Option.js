import React from 'react'
import {default as PT} from 'prop-types'
import cx from 'classnames'
import { getElementType } from '../utils'

const Option = ({ as, className, separator, children, ...props }) => {
  const ElementType = getElementType(Option, { as: as, ...props })
  delete props['as']
  return (
    <li className={cx(separator && 'ola_menu-separator')}>
      <ElementType className={ cx('ola_menu-option', className) } {...props}>
        {children}
      </ElementType>
    </li>
  )
}


Option.defaultProps = {
  variant: null,
  as: 'a',
}

Option.propTypes = {
  /** Render Item with any html tag */
  as: PT.string,
  /** Separator */
  separator: PT.bool,
  /** Extra className */
  className: PT.string,
  /** Childen nodes */
  children: PT.oneOfType([
    PT.string,
    PT.arrayOf(PT.node),
    PT.node
  ]).isRequired
}

export default Option
