import React from 'react'
import {default as PT} from 'prop-types'
import cx from 'classnames'

import { Spinner } from '../Spinner'

const Button = ({ variant, children, disabled, busy, extraClass, ...props }) => {
  const styles = variant ? cx('ola_button', `is-${variant}`, extraClass) : 'ola_button'
  return busy ? (
    <button className={'ola_button is-busy'} disabled {...props}><Spinner />{busy}</button>
  ) : (
    <button className={styles} disabled={disabled} {...props}>{children}</button>
  )
}

Button.defaultProps = {
  variant: null,
  busy: null,
  extraClass: null,
  disabled: false
}

Button.propTypes = {
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
