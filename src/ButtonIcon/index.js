import React from 'react'
import {default as PT} from 'prop-types'
import { getElementType } from '../utils'
import cx from 'classnames'

const ButtonIcon = ({ as, extraClass, children, variant, ...props }) => {
  const ElementType = getElementType(ButtonIcon, { as: as, ...props })
  delete props['as']
  const styles = cx(
    'ola_buttonIcon',
    {[`is-${variant}`]: variant },
    extraClass
  )
  return (<ElementType {...props} className={styles}>{children}</ElementType>)
}

ButtonIcon.defaultProps = {
  as: 'button'
}

ButtonIcon.propTypes = {
  /** Render ButtonIcon with any html tag */
  as: PT.string,
  /** Button variants */
  variant: PT.oneOf(['normal', 'destructive']),
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
