import React from 'react'
import {default as PT} from 'prop-types'
import { Check } from '../Check'

const CheckGroup = ({ options, value, type, name, onChange }) => {
  return (
    <div role="radiogroup" className="ola_checkGroup" onChange={ e => onChange(e) }>
      { options && options.map( (option, idx) => (
        <Check key={idx} name={name} type={type} value={option.value} checked={value && value == option.value}>
          { option.label ? option.label : option.value }
        </Check>
      ))}
    </div>
  )
}

CheckGroup.defaultProps = {
  type: 'radio',
  value: null,
  name: null,
  onChange: () => {}
}

CheckGroup.propTypes = {
  /** Check Type */
  type: PT.oneOf(['checkbox', 'radio']),
  /** Name for Check inputs */
  name: PT.string,
  /** Array of values */
  options: PT.arrayOf(PT.shape({
    label: PT.string.isRequired,
    value: PT.any.isRequired
  })).isRequired,
  /** value selected */
  value: PT.oneOfType([PT.string, PT.number]),
  /** OnChange method */
  onChange: PT.func
}

export { CheckGroup }
