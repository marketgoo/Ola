import React from 'react'
import {default as PT} from 'prop-types'
import cx from 'classnames'

const Input = ({ extraClass, error, type, ...props }) => {
  return type === 'textarea' ?
    ( <textarea type={type} className={ cx('ola_input', {'is-invalid': error}, extraClass) } {...props} /> ) :
    ( <input type={type} className={ cx('ola_input', {'is-invalid': error}, extraClass) } {...props} /> )
}

Input.defaultProps = {
  type: 'text',
  extraClass: null,
  error: false
}

Input.propTypes = {
  /** Input valid types (textarea returns textarea html tag) */
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

export default Input
