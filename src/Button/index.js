import React from 'react'
import { default as PT } from 'prop-types'
import cx from 'classnames'
import { getElementType } from '../utils'

import Spinner from '../Spinner'
import Icon from '../Icon'

const Button = ({ variant, children, disabled, busy, className, iconLink, as, ...props }) => {
  const ElementType = getElementType(Button, { as: as, ...props })
  delete props['as']
  const styles = cx(
    'ola_button',
    { [`is-${variant}`]: variant },
    { 'is-busy': busy },
    { 'is-disabled': disabled && !busy },
    className
  )
  const isIcon = (variant === 'link' && iconLink)
  return (
    <ElementType className={styles} disabled={busy ? true : disabled} {...props}>
      {busy && <Spinner />}
      <span className="ola_button-text">{!busy ? children : busy}</span>
      {isIcon && <Icon name="iconLink" />}
    </ElementType>
  )
}

Button.defaultProps = {
  as: 'button',
  variant: null,
  busy: null,
  className: null,
  disabled: false,
  iconLink: false
}

Button.propTypes = {
  /** Render Button with any html tag */
  as: PT.string,
  /** Button variants */
  variant: PT.oneOf(['primary', 'secondary', 'destructive-primary', 'destructive', 'pro', 'link']),
  /** Text for loading state */
  busy: PT.oneOfType([
    PT.string,
    PT.bool
  ]),
  /** Extra className */
  className: PT.string,
  /** Childen nodes */
  children: PT.oneOfType([
    PT.string,
    PT.arrayOf(PT.node),
    PT.node
  ]).isRequired,
  /** Button is disabled */
  disabled: PT.bool,
  /**Icon is a Bolean  */
  iconLink: PT.bool
}

export default Button
