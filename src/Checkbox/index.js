import React from 'react'
import {default as PT} from 'prop-types'

const Checkbox = ({ label, htmlLabel, ...props }) => {
  return (
    <label className="check">
      <input type="checkbox" className="check-input" {...props} />
      { label && ( htmlLabel ? <span className="check-label" dangerouslySetInnerHTML={{__html: label}} /> : <span className="check-label">{ label }</span>) }
    </label>
  )
}

Checkbox.defaultProps = {
  label: null
}

Checkbox.propTypes = {
  /** Label Checkbox */
  label: PT.string,
  /** Label support HTML tags */
  htmlLabel: PT.bool,
  /** Redux Forms input Checkbox */
  input: PT.object
}

export { Checkbox }
