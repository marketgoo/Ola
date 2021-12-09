import React from 'react'
import { default as PT } from 'prop-types'
import cx from 'classnames'

const Input = React.forwardRef(({ className, error, type, ...props }, ref) => {
  return type === 'textarea' ? (
    <textarea
      ref={ref}
      type={type}
      className={cx('ola_input', { 'is-invalid': error }, className)}
      {...props}
    />
  ) : (
    <input
      type={type}
      ref={ref}
      className={cx('ola_input', { 'is-invalid': error }, className)}
      {...props}
    />
  )
})

Input.defaultProps = {
  type: 'text',
  className: null,
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
}

Input.displayName = 'Input'

export default Input
