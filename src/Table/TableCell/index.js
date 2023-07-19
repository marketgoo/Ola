import React from 'react'
import {default as PT} from 'prop-types'
import cx from 'classnames'

const TableCell = ({ children, header, nowrap, selected, disabled, loading, className }) => {
  return (
    <div
      className={cx('ola_table-cell', {
        'is-header': header,
        'is-nowrap': nowrap,
        'is-selected': selected,
        'is-disabled': disabled,
        'ola-skeleton is-loading': loading
      }, className)}
      role="cell">
      <span>{loading ? null : children}</span>
    </div>
  )
}

TableCell.defaultProps = {
  header: false,
  nowrap: false,
  selected: false,
  disabled: false,
  loading: false,
  className: '',
}

TableCell.propTypes = {
  loading: PT.bool,
  header: PT.bool,
  /** Indicates if the text can be wrapped or not */
  nowrap: PT.bool,
  /** Indicates if the cell is selected */
  selected: PT.bool,
  /** Indicates if the cell is disabled */
  disabled: PT.bool,
  /** Extra className */
  className: PT.string,
  /** Child nodes */
  children: PT.oneOfType([
    PT.string,
    PT.arrayOf(PT.node),
    PT.node
  ]),
}

export default TableCell