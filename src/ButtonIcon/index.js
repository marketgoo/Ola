import React from 'react'
import {default as PT} from 'prop-types'
import { getElementType } from '../utils'
import cx from 'classnames'

import Spinner from '../Spinner'

const ButtonIcon = ({ as, className, children, busy, disabled, variant, ...props }) => {
  const ElementType = getElementType(ButtonIcon, { as: as, ...props })
  delete props['as']
  const styles = cx(
    'ola_buttonIcon',
    `is-${variant}`,
    {'is-busy': busy},
    {'is-disabled': disabled && !busy},
    className
  )
  return (
    <ElementType {...props} disabled={busy ? true : disabled} className={styles}>
      {busy ? <Spinner /> : children}
    </ElementType>
  )
}

ButtonIcon.defaultProps = {
  as: 'button',
  variant: 'primary',
  busy: false,
  disabled: false
}

ButtonIcon.propTypes = {
  /** Render ButtonIcon with any html tag */
  as: PT.string,
  /** Button variants */
  variant: PT.oneOf(['primary', 'secondary', 'destructive', 'chevron']),
  /** Extra className */
  className: PT.string,
  /** Childen nodes */
  children: PT.oneOfType([
    PT.string,
    PT.arrayOf(PT.node),
    PT.node
  ]).isRequired,
  busy: PT.bool,
  disabled: PT.bool,
}

export default ButtonIcon
