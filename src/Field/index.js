import React from 'react'
import {default as PT} from 'prop-types'
import { Input } from '../Input'
import cx from 'classnames'


const Field = ({ label, hint, error, description, ...props }) => {
  return (
    <div className={cx('field', {'is-invalid': error})}>
      {label && <label className="field-label">{ label }</label>}
      {hint && <span className="field-hint">{ hint }</span>}
      <Input error={error} extraClass="field-input" {...props} />
      <p className={ cx({ 'field-error': error, 'field-description': !error }) }>{description}</p>
    </div>
  )
}

Field.defaultProps = {
  error: false
}

Field.propTypes = {
  label: PT.string,
  hint: PT.bool,
  description: PT.string,
  error: PT.bool
}

export { Field }
