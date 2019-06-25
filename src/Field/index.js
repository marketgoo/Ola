import React from 'react'
import {default as PT} from 'prop-types'
import cx from 'classnames'

const Field = ({ id, label, hint, error, description, customDescription, disabled, children }) => {
  return (
    <div className={cx('ola_field', {'is-invalid': error}, {'is-disabled': disabled})}>
      <label htmlFor={id} className="ola_field-label">
        { label }
        {hint && <span className="ola_field-hint">{ hint }</span>}
      </label>
      <div className="ola_field-input">
        {React.cloneElement(children, { id: id, error, disabled })}
      </div>
      {
        customDescription ?
          React.cloneElement(customDescription, { error }) :
          description ?
          ( <p className={ cx({ 'ola_field-error': error, 'ola_field-description': !error }) }>{description}</p> ) :
          ''
      }

    </div>
  )
}

Field.defaultProps = {
  error: false,
  hint: null,
  description: null,
  customDescription: null,
  disabled: false
}

Field.propTypes = {
  /** Id for Input and Label*/
  id: PT.string.isRequired,
  /** Label */
  label: PT.string.isRequired,
  /** Disabled input children */
  disabled: PT.bool,
  /** Hint */
  hint: PT.string,
  /** Description */
  description: PT.string,
  /** Custom Description (react element to replace default description)*/
  customDescription: PT.element,
  /** Error variant */
  error: PT.bool,
  /** Childen input node */
  children: PT.oneOfType([
    PT.arrayOf(PT.node),
    PT.node
  ]).isRequired
}

export { Field }
