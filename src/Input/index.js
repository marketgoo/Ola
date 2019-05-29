import React from 'react'
import {default as PT} from 'prop-types'
import cx from 'classnames'

const Input = ({ extraClass, error, ...props }) => (
  <input className={ cx('input', {'is-invalid': error}, extraClass) } {...props} />
)

Input.defaultProps = {
  error: false
}

Input.propTypes = {
  /** Extra className */
  extraClass: PT.string,
  /** Input is invalid */
  error: PT.bool
}

export { Input }
