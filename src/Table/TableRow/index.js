import React from 'react'
import {default as PT} from 'prop-types'
import TableCell from '../TableCell'
import { uuidv4 } from '../../utils'

const TableRow = ({ children, header, sticky, stickyStyles }) => {
  const uuid = uuidv4()

  const cloneChildren = React.Children.map(children, child => {
    return React.cloneElement(child, { header, 'data-row': uuid, onMouseEnter: () => {
      document.querySelectorAll(`[data-row="${uuid}"]`).forEach(el => {
        el.classList.add('is-hovered')
      })
    }, onMouseLeave: () => {
      document.querySelectorAll(`[data-row="${uuid}"]`).forEach(el => {
        el.classList.remove('is-hovered')
      })
    }})
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