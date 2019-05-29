import React from 'react'
import {default as PT} from 'prop-types'
import cx from 'classnames'

const Input = ({ error, ...props }) => {
  const style = cx('input', {'is-invalid': error})
  return (
    <input className={style} {...props} />
  )
}

Input.defaultProps = {
  error: false
}

Input.propTypes = {
  /** Input is invalid */
  error: PT.bool
}

export { Input }
