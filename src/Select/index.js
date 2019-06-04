import React from 'react'
import {default as PT} from 'prop-types'
import cx from 'classnames'

const SelectOption = ({ value, label }) =>  <option value={value}>{label}</option>

const Select = ({ options, error, extraClass, ...props }) => {
  const styles = cx('ola_select', {'is-invalid': error}, extraClass)
  return (
    <select className={styles} {...props}>
      { options.map( ({ value, label }, idx) => <SelectOption key={idx} value={value} label={label} /> ) }
    </select>
  )
}

Select.defaultProps = {
  extraClass: null
}

Select.propTypes = {
  /** Select options (array {value: any, label: string} )*/
  options: PT.arrayOf(PT.shape({
    value: PT.any,
    label: PT.string
  })).isRequired,
  /** Extra className */
  extraClass: PT.string,
  /** Select is invalid */
  error: PT.bool
}

export { Select }
