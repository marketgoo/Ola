import React, { forwardRef } from 'react'
import { default as PT } from 'prop-types'
import cx from 'classnames'

const Select = forwardRef(({ options, error, disabled, className, multiple, ...props }, ref) => {
  if (multiple) {
    const SelectMultiple = require('react-select').default
    const { components } = require('react-select')

    const DropdownIndicator = ({ ...props }) => {
      return <components.DropdownIndicator {...props}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 32 33" fill="none"><path d="M26.7075 12.7101L16.7075 22.7101C16.6146 22.803 16.5043 22.8768 16.3829 22.9271C16.2615 22.9775 16.1314 23.0034 16 23.0034C15.8686 23.0034 15.7385 22.9775 15.6171 22.9271C15.4957 22.8768 15.3854 22.803 15.2925 22.7101L5.29251 12.7101C5.10487 12.5224 4.99945 12.2679 4.99945 12.0026C4.99945 11.7372 5.10487 11.4827 5.29251 11.2951C5.48015 11.1074 5.73464 11.002 6.00001 11.002C6.26537 11.002 6.51987 11.1074 6.70751 11.2951L16 20.5888L25.2925 11.2951C25.3854 11.2022 25.4957 11.1285 25.6171 11.0782C25.7385 11.0279 25.8686 11.002 26 11.002C26.1314 11.002 26.2615 11.0279 26.3829 11.0782C26.5043 11.1285 26.6146 11.2022 26.7075 11.2951C26.8004 11.388 26.8741 11.4983 26.9244 11.6197C26.9747 11.7411 27.0006 11.8712 27.0006 12.0026C27.0006 12.134 26.9747 12.2641 26.9244 12.3855C26.8741 12.5069 26.8004 12.6172 26.7075 12.7101Z" fill="#1C1F22"/></svg>
      </components.DropdownIndicator>
    }

    return (
      <SelectMultiple
        className={cx('ola_select', 'ola_select--multiple', {
          'is-invalid': error,
          'is-disabled': disabled
        }, className)}
        isMulti
        closeMenuOnSelect={false}
        closeMenuOnScroll
        hideSelectedOptions
        isSearchable
        isClearable={false}
        isDisabled={disabled}
        options={options}
        classNamePrefix="ola_select-multiple"
        components={{ DropdownIndicator }}
        classNames={{
          control: ({ isFocused }) =>
            cx('select--multiple', {
              'is-focused': isFocused,
            }),
        }}
        {...props}
      />
    )
  }

  const SelectOption = ({ value, label, ...props }) => 
    <option value={value} {...props}>{label}</option>

  return (
    <select
      ref={ref}
      className={cx('ola_select', {
        'is-invalid': error,
        'is-disabled': disabled,
      }, className)}
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
  value: null,
  disabled: false,
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
  /** Indicates if the select allows multiple selection */
  multiple: PT.bool,
  value: PT.oneOfType([PT.arrayOf(PT.any), PT.any]),
  disabled: PT.bool,
}

export default Select
