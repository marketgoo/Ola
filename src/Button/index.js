import React from 'react'
import { default as PT } from 'prop-types'
import cx from 'classnames'
import { getElementType } from '../utils'

import Spinner from '../Spinner'
import Icon from '../Icon'

const Button = ({ variant, children, disabled, multiline, busy, className, icon, as, selected, progress, ...props }) => {
  const ElementType = getElementType(Button, { as: as, ...props })
  delete props['as']
  const styles = cx(
    'ola_button',
    { [`is-${variant}`]: variant },
    { 'is-busy': busy },
    { 'is-multiline': multiline },
    { 'is-disabled': disabled && !busy },
    className
  )

  const pressed = selected === null ? null : (selected ? 'true' : 'false')

  return (
    <ElementType className={styles} disabled={busy ? true : disabled} aria-pressed={pressed} {...props}>
      {busy ? <Spinner /> : icon &&  <Icon name={icon} size="small" className="ola_button-icon" /> }
      <span className="ola_button-text">{!busy ? children : busy}</span>
      { typeof progress === 'number' ? <span className="ola_button-progress">{ clamp(progress) }%</span> : null }
    </ElementType>
  )
}

Button.defaultProps = {
  as: 'button',
  variant: null,
  busy: null,
  className: null,
  disabled: false,
  multiline: null,
  selected: null,
  progress: null,
  icon: null
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
  /** Button content */
  children: PT.oneOfType([
    PT.string,
    PT.arrayOf(PT.node),
    PT.node
  ]).isRequired,
  /** Whether the button is disabled */
  disabled: PT.bool,
  /** Whether the button include multiline text */
  multiline: PT.bool,
  /** Whether the button is selected */
  selected: PT.bool,
  /** The percentage progress */
  progress: PT.number,
  /** Icon name  */
  icon: PT.string
  
}

export default Button

function clamp(number) {
  return Math.min(Math.max(number, 0), 100)
}