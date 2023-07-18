import React from 'react'
import {default as PT} from 'prop-types'
import cx from 'classnames'

const TableCell = ({ children, header, nowrap, selected, disabled, loading }) => {
  return (
    <div
      className={cx('ola_table-cell', {
        'is-header': header,
        'is-nowrap': nowrap,
        'is-selected': selected,
        'is-disabled': disabled,
        'ola-skeleton is-loading': loading
      })}
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
  loading: false
}

TableCell.propTypes = {
  loading: PT.bool,
  header: PT.bool,
  nowrap: PT.bool,
  selected: PT.bool,
  disabled: PT.bool,
  children: PT.oneOfType([
    PT.string,
    PT.arrayOf(PT.node),
    PT.node
  ]),
}

export default TableCell