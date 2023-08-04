import React, {forwardRef} from 'react'
import {default as PT} from 'prop-types'
import cx from 'classnames'

const SelectOption = ({ value, label, ...props }) =>  <option value={value} {...props}>{label}</option>

const Select = forwardRef(({ options, error, className, multiple, ...props }, ref) => {
  if (multiple) {
    const SelectMultiple = require('react-select').default

    return (
      <SelectMultiple
        className={cx('ola_select-multiple', {'is-invalid': error}, className)}
        defaultValue={props?.value || []}
        isMulti
        closeMenuOnSelect={false}
        closeMenuOnScroll
        hideSelectedOptions
        isSearchable
        isClearable={false}
        isDisabled={props?.disabled}
        noOptionsMessage={props?.noOptionsMessage}
        options={options}
        {...props}
      />
    )
  }

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
  error: false,
  multiple: false,
  onRemoveItem: null,
  value: null,
  disabled: false,
  noOptionsMessage: null
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
  error: PT.bool,
  multiple: PT.bool,
  onRemoveItem: PT.func,
  value: PT.oneOfType([PT.arrayOf(PT.any), PT.any]),
  disabled: PT.bool,
  noOptionsMessage: PT.string
}

export default Select
