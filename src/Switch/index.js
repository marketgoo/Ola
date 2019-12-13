import React from 'react'
import {default as PT} from 'prop-types'

const Switch = ({ label, htmlLabel, ...props }) => {
  return (
    <label className="ola_switch">
      <input type="checkbox" className="ola_switch-input" {...props} />
      { label && ( htmlLabel ? <span className="ola_switch-label" dangerouslySetInnerHTML={{__html: label}} /> : <span className="ola_switch-label">{ label }</span>) }
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

export default Switch
