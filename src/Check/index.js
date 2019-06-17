import React from 'react'
import {default as PT} from 'prop-types'

const Check = ({ type, label, htmlLabel, ...props }) => {
  return (
    <label className="ola_check">
      <input type={type} className="ola_check-input" {...props} />
      { label && ( htmlLabel ? <span className="ola_check-label" dangerouslySetInnerHTML={{__html: label}} /> : <span className="ola_check-label">{ label }</span>) }
    </label>
  )
}

Check.defaultProps = {
  type: 'checkbox',
  label: null
}

Check.propTypes = {
  /** Check Type */
  type: PT.oneOf(['checkbox', 'radio']),
  /** Check Label */
  label: PT.string,
  /** Label support HTML tags */
  htmlLabel: PT.bool,
  /** Redux Forms input Check */
  input: PT.object
}

export { Check }
