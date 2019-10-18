import React from 'react'
import {default as PT} from 'prop-types'
import cx from 'classnames'
import { Check } from '../Check'

const CheckArea = ({ options, htmlOptions, value, type, variant, onChange }) => {
  return (
    <div role="radiogroup" className={cx('ola_checkArea', variant && `is-${variant}`)} onChange={ e => onChange(e) }>
      { options && options.map( (option, idx) => (
        <Check key={idx} name="test" type={type} value={option.value} checked={ value && value == option.value }>
          { htmlOptions ? (
            <div className="ola_checkArea-content" dangerouslySetInnerHTML={{ __html: option.label }} />
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
  onChange: () => {},
  htmlOptions: false
}

CheckArea.propTypes = {
  /** Check Type */
  type: PT.oneOf(['checkbox', 'radio']),
  /** CheckArea variants */
  variant: PT.oneOf(['row', 'column']),
  /** Array of values */
  options: PT.arrayOf(PT.shape({
    label: PT.oneOfType([
      PT.string,
      PT.arrayOf(PT.node),
      PT.node
    ]).isRequired,
    value: PT.any.isRequired
  })).isRequired,
  /** Label value in options can be html */
  htmlOptions: PT.bool,
  /** value selected */
  value: PT.oneOfType([PT.string, PT.number]),
  /** OnChange method */
  onChange: PT.func
}

export { CheckArea }
