import React from 'react'
import {default as PT} from 'prop-types'

const Switch = ({ label, htmlLabel, ...props }) => {
  return (
    <label className="switch">
      <input type="checkbox" className="switch-input" {...props} />
      { label && ( htmlLabel ? <span className="switch-label" dangerouslySetInnerHTML={{__html: label}} /> : <span className="switch-label">{ label }</span>) }
    </label>
  )
}

Switch.defaultProps = {
  label: null
}

Switch.propTypes = {
  /** Label Switch */
  label: PT.string,
  /** Label support HTML tags */
  htmlLabel: PT.bool,
  /** Redux Forms input Switch */
  input: PT.object
}

export { Switch }
