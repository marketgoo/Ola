import React from 'react'
import {default as PT} from 'prop-types'
import cx from 'classnames'
import { Check } from '../Check'

const CheckList = ({ values, type }) => values.map( ({label, description, value}, idx) =>
  <Check key={idx} name="test" type={type} value={value}>
    { description ? <div className="checkArea-content"><strong>{label}</strong><br/>{description}</div> : <div className="checkArea-content">{ label }</div> }
  </Check>
)

const CheckArea = ({ values, type, variant }) => {
  return (
    <div role="radiogroup" className={cx('ola_checkArea', variant && `is-${variant}`)}>
      <CheckList values={values} type={type} />
    </div>
  )
}


CheckArea.defaultProps = {
  type: 'radio',
  variant: 'row'
}

CheckArea.propTypes = {
  /** Check Type */
  type: PT.oneOf(['checkbox', 'radio']),
  /** CheckArea variants */
  variant: PT.oneOf(['row', 'column']),
  /** Array of values */
  values: PT.arrayOf(PT.shape({
    label: PT.string.isRequired,
    description: PT.string,
    value: PT.any.isRequired
  })).isRequired
}

export { CheckArea }
