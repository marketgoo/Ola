import React from 'react'
import {default as PT} from 'prop-types'
import cx from 'classnames'
import { CaretDown, CaretUp } from '@phosphor-icons/react'

const TableCellOrder = ({ children, direction }) => {
  const icon = {
    asc: <CaretUp weight="fill" />,
    desc: <CaretDown weight="fill" />,
  }
  icon.null = icon.desc

  return (
    <>
      {children} {icon[direction]}
    </>
  )
}

const TableCell = ({
  children,
  header,
  nowrap,
  selected,
  loading,
  orderable,
  direction,
  align,
  className,
  padding,
  ...props }) => {
  return (
    <div
      className={cx('ola_table-cell', `is-align--${align}`, {
        'is-header': header,
        'is-nowrap': nowrap,
        'is-selected': selected,
        'is-orderable': orderable,
        'is-ordered': !!direction,
        'ola-skeleton is-loading': loading
      }, className)}
      style={{
        'padding': padding
      }}
      role="cell"
      {...props}>
      <span>{
        loading
          ? null
          : orderable
            ? <TableCellOrder direction={direction}>{children}</TableCellOrder>
            : children
      }</span>
    </div>
  )
}

TableCell.defaultProps = {
  header: false,
  nowrap: false,
  selected: false,
  loading: false,
  orderable: false,
  direction: null,
  align: 'left',
  className: '',
  padding: '0 var(--size-2)',
}

TableCell.propTypes = {
  /** Indicates if the cell is loading */
  loading: PT.bool,
  /** Indicates if the cell is a header */
  header: PT.bool,
  /** Indicates if the text can be wrapped or not */
  nowrap: PT.bool,
  /** Indicates if the cell is selected */
  selected: PT.bool,
  /** Indicates if the cell is orderable */
  orderable: PT.bool,
  /** Order direction */
  direction: PT.oneOf(['asc', 'desc']),
  /** Alignment */
  align: PT.oneOf(['left', 'center', 'right']),
  /** Extra className */
  className: PT.string,
  /** Padding in css unit. Default "0 var(--size-2)" */
  padding: PT.string,
  /** Child nodes */
  children: PT.oneOfType([
    PT.string,
    PT.arrayOf(PT.node),
    PT.node
  ]),
}

export default TableCell