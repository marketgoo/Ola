import React from 'react'
import {default as PT} from 'prop-types'
import { getElementType } from '../utils'

const ButtonIcon = ({ as, children, ...props }) => {
  const ElementType = getElementType(ButtonIcon, { as: as, ...props })
  return (<ElementType {...props} className='ola_buttonIcon'>{children}</ElementType>)
}

ButtonIcon.defaultProps = {
  as: 'button'
}

ButtonIcon.propTypes = {
  /** Render ButtonIcon with any html tag */
  as: PT.string,
  /** Childen nodes */
  children: PT.oneOfType([
    PT.string,
    PT.arrayOf(PT.node),
    PT.node
  ]).isRequired
}

export default ButtonIcon
