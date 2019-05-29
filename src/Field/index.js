import React from 'react'
import {default as PT} from 'prop-types'
import cx from 'classnames'


const Field = ({ name, label, hint, error, description, disabled, children }) => {
  return (
    <div className={cx('field', {'is-invalid': error})}>
      <label htmlFor="test" className="field-label">
        { label }
        {hint && <span className="field-hint">{ hint }</span>}
      </label>
      <div className="field-input">
        {React.cloneElement(children, { id: name, error, disabled })}
      </div>
      <p className={ cx({ 'field-error': error, 'field-description': !error }) }>{description}</p>
    </div>
  )
}

Field.defaultProps = {
  error: false,
  hint: null,
  description: null,
  disabled: false
}

Field.propTypes = {
  /** Name for Input and Label */
  name: PT.string,
  /** Label */
  label: PT.string.isRequired,
  /** Disabled input children */
  disabled: PT.bool,
  /** Hint */
  hint: PT.string,
  /** Description */
  description: PT.string,
  /** Error variant */
  error: PT.bool,
  /** Childen nodes */
  children: PT.oneOfType([
    PT.arrayOf(PT.node),
    PT.node
  ]).isRequired
}

export { Field }
