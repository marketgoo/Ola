import React from 'react'
import {default as PT} from 'prop-types'
import TableCell from './TableCell'

const TableRow = ({ children, header, sticky, stickyStyles }) => {
  const cloneChildren = React.Children.map(children, child => {
    return React.cloneElement(child, { header })
  })

  if (sticky) {
    return (
      <div
        className="ola_table-row is-sticky"
        style={stickyStyles}
        role="row">
        {cloneChildren}
      </div>
    )
  }

  return (<>{cloneChildren}</>)
}

TableRow.defaultProps = {
  header: false,
  sticky: false,
  stickyStyles: {},
}

TableRow.propTypes = {
  sticky: PT.bool,
  stickyStyles: PT.object,
  /** Indicates if the row is a header row */
  header: PT.bool,
  /** Child nodes */
  children: PT.oneOfType([
    TableCell,
    PT.arrayOf(TableCell),
  ]),
}

export default TableRow