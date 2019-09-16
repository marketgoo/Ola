import React from 'react'
import {default as PT} from 'prop-types'
import cx from 'classnames'
import { Check } from '../Check'

const CheckArea = ({ options, value, type, variant, onChange }) => {
  return (
    <div role="radiogroup" className={cx('ola_checkArea', variant && `is-${variant}`)} onChange={ e => onChange(e) }>
      { options && options.map( (option, idx) => (
        <Check key={idx} name="test" type={type} value={option.value} checked={ value && value === option.value }>
          { option.description ? (
            <div className="ola_checkArea-content"><strong>{option.label}</strong><br/>{option.description}</div>
          ) : (
            <div className="ola_checkArea-content">{ option.label }</div>
          )}
        </Check>
      ))}
    </div>
  )
}


CheckArea.defaultProps = {
  type: 'radio',
  variant: 'row',
  value: null,
  onChange: () => {}
}

CheckArea.propTypes = {
  /** Check Type */
  type: PT.oneOf(['checkbox', 'radio']),
  /** CheckArea variants */
  variant: PT.oneOf(['row', 'column']),
  /** Array of values */
  options: PT.arrayOf(PT.shape({
    label: PT.string.isRequired,
    description: PT.string,
    value: PT.any.isRequired
  })).isRequired,
  /** value selected */
  value: PT.string,
  /** OnChange method */
  onChange: PT.func
}

export { CheckArea }
