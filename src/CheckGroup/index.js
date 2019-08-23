import React from 'react'
import {default as PT} from 'prop-types'
import { Check } from '../Check'

const CheckList = ({ values, type }) => values.map( ({label, value}, idx) =>
  <Check key={idx} name="test" label={ label ? label : value } type={type} value={value} />
)

const CheckGroup = ({ values, type, ...props }) => {
  return (
    <div role="radiogroup" className="ola_checkGroup" {...props}>
      <CheckList values={values} type={type} />
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
