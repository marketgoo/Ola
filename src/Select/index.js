import React, {forwardRef} from 'react'
import {default as PT} from 'prop-types'
import cx from 'classnames'

const SelectOption = ({ value, label, ...props }) =>  <option value={value} {...props}>{label}</option>

const Select = forwardRef(({ options, error, className, ...props }, ref) => {
  const styles = cx('ola_select', {'is-invalid': error}, className)
  return (
    <select className={styles} ref={ref} {...props}>
      { options.map( ({ value, label }, idx) => <SelectOption key={idx} value={value} label={label} /> ) }
    </select>
  )
})

Select.defaultProps = {
  className: null,
}

Select.displayName = 'Select'

Select.propTypes = {
  /** Select options (array {value: any, label: string} )*/
  options: PT.arrayOf(PT.shape({
    value: PT.any,
    label: PT.string
  })).isRequired,
  /** Extra className */
  className: PT.string,
  /** Select is invalid */
  error: PT.bool
}

export default Select
