import React from 'react'
import {default as PT} from 'prop-types'
import TableCell from '../TableCell'
import { uuidv4 } from '../../utils'

const TableRow = ({ children, header, sticky, stickyStyles, uuid }) => {
  const uuidGenerated = uuid || uuidv4()

  const cloneChildren = React.Children.map(children, child => {
    const config = { header }

    if (!header) {
      config['data-row'] = uuidGenerated
      config.onMouseEnter = () => {
        document.querySelectorAll(`[data-row="${uuidGenerated}"]`).forEach(el => {
          el.classList.add('is-hovered')
        })
      }
      config.onMouseLeave = () => {
        document.querySelectorAll(`[data-row="${uuidGenerated}"]`).forEach(el => {
          el.classList.remove('is-hovered')
        })
      }
    }

    return React.cloneElement(child, config)
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
  uuid: null
}

TableRow.propTypes = {
  uuid: PT.string,
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