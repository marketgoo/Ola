import React from 'react'
import {default as PT} from 'prop-types'
import cx from 'classnames'
import TableCell from './Cell.js'

const TableRow = ({ className, check, children, checked, ...props }) => {
  return (
    <tr className={cx('ola_tableRow', {'is-selectable': check, 'is-checked': checked}, className)} {...props}>
      {check && (<TableCell variant="check">{check}</TableCell>)}
      {children}
    </tr>
  )
}

TableRow.defaultProps = {
  check: null,
  checked: false
}

TableRow.propTypes = {
  /** Extra className */
  className: PT.string,
  /** Selectable check */
  check: PT.node,
  /** Is checked */
  checked: PT.bool,
  /** Childen nodes */
  children: PT.oneOfType([
    PT.string,
    PT.arrayOf(PT.node),
    PT.node
  ])
}

export default TableRow
