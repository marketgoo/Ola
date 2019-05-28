import React from 'react'
import {default as PT} from 'prop-types'
import cx from 'classnames'

const Field = ({ invalid, ...props }) => {
  const style = cx('input', {invalid: `is-${invalid}`})
  return (
    <input className={style} {...props} />
  )
}

Field.defaultProps = {
  invalid: false
}

Field.propTypes = {
  /** Input is invalid */
  invalid: PT.bool
}

export { Field }
