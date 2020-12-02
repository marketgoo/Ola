import React from 'react'
import {default as PT} from 'prop-types'

const ChartColumn = ({ children }) => {
  return (
    <div className="ola_chartColumn">
      { children }
    </div>
  )
}

ChartColumn.propTypes = {
  /** Childen nodes */
  children: PT.oneOfType([
    PT.arrayOf(PT.node),
    PT.node
  ]).isRequired
}

export default ChartColumn
  