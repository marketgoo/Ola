import React from 'react'
import {default as PT} from 'prop-types'
import { getElementType } from '../utils'
import cx from 'classnames'
import Icon from '../Icon'
import Spinner from '../Spinner'

const ButtonIcon = ({ as, className, busy, disabled, color, variant, invert, icon, ...props }) => {
  const ElementType = getElementType(ButtonIcon, { as: as, ...props })
  delete props.as

  const variantNumber = variant === 'normal' ? '500' : '900'

  const iconElement = typeof icon === 'string' ? <Icon name={icon} /> : icon

  const styles = cx(
    'ola_button_icon',
    `is-${variant}`,
    {'is-busy': busy},
    {'is-disabled': disabled && !busy},
    {'is-invert': invert},
    className
  )
  return (
    <ElementType
      className={styles}  
      disabled={busy || disabled}
      style={{
        '--base-color': `var(--color-${color}-${variantNumber})`,
        '--busy-color': `var(--color-${color}-600)`,
        '--disabled-color': `var(--color-${color}-300)`,
        '--shadow-focus': `var(--shadow-focus-${color})`,
      }}
      {...props}>
      {busy ? <Spinner /> : iconElement}
    </ElementType>
  )
}

ButtonIcon.defaultProps = {
  as: 'button',
  variant: 'normal',
  color: 'neutral',
  busy: false,
  disabled: false,
  invert: false,
  icon: null
}

ButtonIcon.propTypes = {
  /** Name of the icon in this lib (see Ola Icon), or a svg direcly **(preferred a Phosphor Icon)** */
  icon: PT.oneOfType([
    PT.string,
    PT.shape({
      type: PT.oneOf(['svg']),
    })
  ]),
  /** Render ButtonIcon with any html tag */
  as: PT.string,
  /** Icon color */
  color: PT.oneOf(['primary', 'neutral', 'positive', 'negative', 'warning', 'pro', 'accent']),
  /** Icon variant (normal=color-500, dark=color-900) */
  variant: PT.oneOf(['normal', 'dark']),
  /** Extra className */
  className: PT.string,
  /** Button busy state */
  busy: PT.bool,
  /** Button disabled state */
  disabled: PT.bool,
  /** Indicate if icon should have color white */
  invert: PT.bool,
}

export default ButtonIcon
