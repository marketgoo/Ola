import React from 'react'
import {default as PT} from 'prop-types'
import cx from 'classnames'

const Input = ({ extraClass, error, type, ...props }) => {
  return type === 'textarea' ?
    ( <textarea type={type} className={ cx('input', {'is-invalid': error}, extraClass) } {...props} /> ) :
    ( <input type={type} className={ cx('input', {'is-invalid': error}, extraClass) } {...props} /> )
}

Input.defaultProps = {
  type: 'text',
  error: false
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
    'week'
  ]),
  /** Extra className */
  extraClass: PT.string,
  /** Input is invalid */
  error: PT.bool
}

export { Input }
