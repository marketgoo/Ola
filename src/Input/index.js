import React from 'react'
import { default as PT } from 'prop-types'
import cx from 'classnames'
import ButtonIcon from '../ButtonIcon'

const Input = React.forwardRef(({ className, error, type, icon, ...props }, ref) => {
  const Element = type === 'textarea' ? 'textarea' : 'input'

  if (type === 'textarea' && !props.rows) {
    props.rows = 3
  }

  if (type !== 'textarea') {
    props.type = type
  }

  const createElement = () => <Element
    ref={ref}
    className={cx('ola_input', { 'is-invalid': error, 'is-icon': !!icon }, className)}
    {...props}
  />

  if (icon) {
    return (
      <div className="ola_input-wrapper">
        {createElement()}
        <div className="ola_input-icon">
          {icon}
        </div>
      </div>
    )
  }
 
  return createElement()
})

Input.defaultProps = {
  type: 'text',
  className: null,
  icon: null,
  error: false,
}

Input.propTypes = {
  /** Input valid types (texarea return texarea html tag) */
  type: PT.oneOf([
    'date',
    'datetime-local',
    'email',
    'month',
    'number',
    'password',
    'search',
    'tel',
    'text',
    'textarea',
    'time',
    'url',
    'week',
  ]),
  /** Extra className */
  className: PT.string,
  /** Input is invalid */
  error: PT.bool,
  /** Optional ButtonIcon to show on the top right corner. */
  icon: PT.oneOf([
    ButtonIcon
  ]),
  rows: PT.number,
}

Input.displayName = 'Input'

export default Input
