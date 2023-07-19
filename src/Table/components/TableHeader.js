import React from 'react'
import {default as PT} from 'prop-types'
import TableRow from './TableRow'

const TableHeader = ({ ...props }) => {
  return (
    <TableRow {...props} header />
  )
}

TableHeader.defaultProps = {
  ...TableRow.defaultProps,
  __type__: 'TableHeader',
}

TableHeader.propTypes = {
  ...TableRow.propTypes,
  /** Private prop for development purposes. Do not use. */
  __type__: PT.string,
}

export default TableHeader