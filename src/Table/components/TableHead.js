import React from 'react'
import {default as PT} from 'prop-types'
import cx from 'classnames'
import TableRow from './TableRow'

const TableHead = ({ children }) => {
  return (
    <div className="ola_table-head" role='rowgroup'>
      {children}
    </div>
  )
}
TableHead.defaultProps = {
  __type__: 'TableHead'
}
TableHead.propTypes = {
  /** Private prop. Do not use. For development purposes */
  __type__: PT.string,
  children: PT.oneOfType([
    PT.instanceOf(TableRow),
    PT.arrayOf(PT.instanceOf(TableRow)),
  ]).isRequired
}

export default TableHead