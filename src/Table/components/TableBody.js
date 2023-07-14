import React from 'react'
import {default as PT} from 'prop-types'
import cx from 'classnames'
import TableRow from './TableRow'

const TableBody = ({ children }) => {
  return (
    <div className="ola_table-body" role='rowgroup'>
      {children}
    </div>
  )
}
TableBody.defaultProps = {
  __type__: 'TableBody'
}
TableBody.propTypes = {
  /** Private prop. Do not use. For development purposes */
  __type__: PT.string,
  children: PT.oneOfType([
    PT.instanceOf(TableRow),
    PT.arrayOf(PT.instanceOf(TableRow)),
  ]).isRequired
}

export default TableBody