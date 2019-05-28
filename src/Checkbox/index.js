import React from 'react'
import {default as PT} from 'prop-types'
// import cx from 'classnames'

const Checkbox = ({ label, input: { value, onChange }}) => {
  return (
    <label className="check">
      <input type="checkbox" className="check-input" onClick={() => onChange(!value)} />
      <span className="check-label">{ label }</span>
    </label>
  )
}

Checkbox.defaultProps = {
  label: null
}

Checkbox.propTypes = {
  /** Label Checkbox */
  label: PT.string,
  /** Redux Forms input Checkbox */
  input: PT.object
}

export { Checkbox }
