import React from 'react'
import {default as PT} from 'prop-types'
import cx from 'classnames'

const SelectOption = ({ value, label, ...props }) =>  <option value={value} {...props}>{label}</option>

const Select = ({ options, error, extraClass, emptyOption, ...props }) => {
  const styles = cx('ola_select', {'is-invalid': error}, extraClass)
  return (
    <select className={styles} {...props}>
      { emptyOption && <SelectOption disabled selected label={emptyOption}/> }
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
  /** Empty option create a fist value disabled as placeholder */
  emptyOption: PT.string,
  /** Extra className */
  extraClass: PT.string,
  /** Select is invalid */
  error: PT.bool
}

export { Select }
