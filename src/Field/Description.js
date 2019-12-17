import React from 'react'
import {default as PT} from 'prop-types'
import cx from 'classnames'

const FieldDescription = ({ error, children }) => {
  return (
    <p className={cx({'ola_field-error': error, 'ola_field-description': !error })}>
      { children }
    </p>
  )
}

FieldDescription.defaultProps = {
  error: false
}

FieldDescription.propTypes = {
  /** Error variant (automatic if Field is parent) */
  error: PT.bool,
  /** Childen input node */
  children: PT.oneOfType([
    PT.arrayOf(PT.node),
    PT.node
  ]).isRequired
}

export default FieldDescription
