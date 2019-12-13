import React from 'react'
import {default as PT} from 'prop-types'
import cx from 'classnames'
import TableCell from './Cell.js'

const TableRow = ({ extraClass, select, children, ...props }) => {
  return (
    <tr className={cx('ola_tableRow', {'is-selectable': select}, extraClass)} {...props}>
      {select && (<TableCell>{select}</TableCell>)}
      {children}
    </tr>
  )
}

TableRow.defaultProps = {

}

TableRow.propTypes = {
  /** Extra className */
  extraClass: PT.string,
  /** Selectable check */
  select: PT.node,
  /** Childen nodes */
  children: PT.oneOfType([
    PT.string,
    PT.arrayOf(PT.node),
    PT.node
  ])
}

export default TableRow
