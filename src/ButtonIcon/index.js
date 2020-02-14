import React from 'react'
import {default as PT} from 'prop-types'
import { getElementType } from '../utils'
import cx from 'classnames'

const ButtonIcon = ({ as, extraClass, children, ...props }) => {
  const ElementType = getElementType(ButtonIcon, { as: as, ...props })
  return (<ElementType {...props} className={cx('ola_buttonIcon', extraClass)}>{children}</ElementType>)
}

ButtonIcon.defaultProps = {
  as: 'button'
}

ButtonIcon.propTypes = {
  /** Render ButtonIcon with any html tag */
  as: PT.string,
  /** Extra className */
  extraClass: PT.string,
  /** Childen nodes */
  children: PT.oneOfType([
    PT.string,
    PT.arrayOf(PT.node),
    PT.node
  ]).isRequired
}

export default ButtonIcon
