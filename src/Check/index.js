import React from 'react'
import {default as PT} from 'prop-types'

const Check = ({ type, children, ...props }) => {
  return (
    <label className="ola_check">
      <input type={type} className="ola_check-input" {...props} />
      <div className="ola_check-label">{ children }</div>
    </label>
  )
}

Check.defaultProps = {
  type: 'checkbox'
}

Check.propTypes = {
  /** Check Type */
  type: PT.oneOf(['checkbox', 'radio']),
  /** Childen nodes */
  children: PT.oneOfType([
    PT.string,
    PT.arrayOf(PT.node),
    PT.node
  ]).isRequired
}

export default Check
