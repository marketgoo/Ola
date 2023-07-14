import React from 'react'
import {default as PT} from 'prop-types'
import cx from 'classnames'

const TableRow = ({ children }) => {
  return (
    <div className="ola_table-row" role="row">
      {children}
    </div>
  )
}

TableRow.propTypes = {
  children: PT.oneOfType([
    PT.string,
    PT.arrayOf(PT.node),
    PT.node
  ])
}

export default TableRow