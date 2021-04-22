import React from 'react'
import {default as PT} from 'prop-types'
import cx from 'classnames'
import { getElementType } from '../utils'

const TabOption = ({ as, className, children, selected, ...props }) => {
  const ElementType = getElementType(TabOption, { as: as, ...props })
  delete props['as']

  return (
    <li>
      <ElementType aria-current={selected} className={ cx(
        'ola_tab-option',
        className,
        {
          ['is-selected']: selected 
        }) } {...props}>
        {children}
      </ElementType>
    </li>
  )
}


TabOption.defaultProps = {
  as: 'button',
}

TabOption.propTypes = {
  /** Render Item with any html tag */
  as: PT.string,
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

export default TabOption
