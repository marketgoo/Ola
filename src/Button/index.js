import React from 'react'
import {default as PT} from 'prop-types'
import cx from 'classnames'
import { getElementType } from '../utils'

import { Spinner } from '../Spinner'

const Button = ({ variant, children, disabled, busy, extraClass, ...props }) => {
  const ElementType = getElementType(Button, {...props})
  const styles = cx(
    'ola_button',
    {[`is-${variant}`]: (variant && !busy && !disabled) },
    {'is-busy': busy},
    {'is-disabled': disabled && !busy},
    extraClass
  )
  return (
    <ElementType className={styles} disabled={busy ? true : disabled} {...props}>
      {busy && <Spinner />}
      <span className="ola_button-text">{!busy ? children : busy}</span>
    </ElementType>
  )
}

Button.defaultProps = {
  as: 'button',
  variant: null,
  busy: null,
  extraClass: null,
  disabled: false
}

Button.propTypes = {
  /** Element Type */
  as: 'button',
  /** Button variants */
  variant: PT.oneOf(['primary', 'secondary', 'destructive-primary', 'destructive', 'pro']),
  /** Text for loading state */
  busy: PT.oneOfType([
    PT.string,
    PT.bool
  ]),
  /** Extra className */
  extraClass: PT.string,
  /** Childen nodes */
  children: PT.oneOfType([
    PT.string,
    PT.arrayOf(PT.node),
    PT.node
  ]).isRequired,
  /** Button is disabled */
  disabled: PT.bool
}

export { Button }
