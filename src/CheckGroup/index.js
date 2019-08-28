import React from 'react'
import {default as PT} from 'prop-types'
import { Check } from '../Check'

const CheckGroup = ({ values, type }) => {
  return (
    <div role="radiogroup" className="ola_checkGroup">
      { values && values.map( ({label, value}, idx) => (
        <Check key={idx} name="test" type={type} value={value}>
          { label ? label : value }
        </Check>
      ))}
    </div>
  )
}

CheckGroup.defaultProps = {
  type: 'radio'
}

CheckGroup.propTypes = {
  /** Check Type */
  type: PT.oneOf(['checkbox', 'radio']),
  /** Array of values */
  values: PT.arrayOf(PT.shape({
    label: PT.string.isRequired,
    value: PT.any.isRequired
  })).isRequired
}

export { CheckGroup }
