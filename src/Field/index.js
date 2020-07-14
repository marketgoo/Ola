import React, { useState } from 'react'
import { default as PT } from 'prop-types'
import cx from 'classnames'

const Field = ({ id, label, hint, error, description, disabled, children, maxCharacter }) => {

  const [charRemain, setCharRemain] = useState(maxCharacter)
  const [character, setCharacter] = useState(null)

  const handleContent = (ev) => {
    const character = ev.target.value.length
    let charRemain = maxCharacter - character
    setCharRemain(charRemain)
    setCharacter(character)
  }

  const showError = error || ( maxCharacter && charRemain === 0 )

  return (
    <div className={cx('ola_field', { 'is-invalid': showError }, { 'is-disabled': disabled })}>
      <label htmlFor={id} className="ola_field-label">
        {label}
        {maxCharacter && character > 0 ? <span className="ola_field-hint"> {charRemain}  / {maxCharacter} </span> :
          hint && <span className="ola_field-hint">{hint} <strong>{maxCharacter}</strong></span>}
      </label>
      <div className="ola_field-input">
        {React.cloneElement(children, { id: id, error: id === 'field-error' || (maxCharacter && charRemain === 0), disabled, maxlength: maxCharacter, onChange: handleContent})}
      </div>
      {description && <p className={ cx({'ola_field-error': showError, 'ola_field-description': !showError }) }>{ description }</p>}
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
  /** Id for Input and Label*/
  id: PT.string.isRequired,
  /** Label */
  label: PT.string.isRequired,
  /** Disabled input children */
  disabled: PT.bool,
  /** Hint */
  hint: PT.oneOfType([PT.arrayOf(PT.node), PT.node, PT.string]),
  /** Description */
  description: PT.oneOfType([PT.arrayOf(PT.node), PT.node, PT.string]),
  /** Error variant */
  error: PT.bool,
  /** Character counter */
  maxCharacter: PT.number,
  /** Childen input node */
  children: PT.oneOfType([PT.arrayOf(PT.node), PT.node]).isRequired
}

export default Field
