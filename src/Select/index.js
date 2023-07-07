import React, {forwardRef} from 'react'
import {default as PT} from 'prop-types'
import cx from 'classnames'

const SelectOption = ({ value, label, ...props }) =>  <option value={value} {...props}>{label}</option>

const Select = forwardRef(({ options, error, className, ...props }, ref) => {
  return (
    <select
      ref={ref}
      className={cx('ola_select', {'is-invalid': error}, className)}
      {...props}>
      { options.map( (option, idx) => <SelectOption key={idx} {...option} /> ) }
    </select>
  )
})

Select.defaultProps = {
  options: [],
  className: null,
  error: false
}

Select.displayName = 'Select'

Select.propTypes = {
  /** Select options (array {value: any, label: string} )*/
  options: PT.arrayOf(PT.shape({
    value: PT.any,
    label: PT.string
  })),
  /** Extra className */
  className: PT.string,
  /** Select is invalid */
  error: PT.bool
}

export default Select
