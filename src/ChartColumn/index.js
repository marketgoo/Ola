import React from 'react'
import {default as PT} from 'prop-types'

const normalizeRange = (val, max, min) => (val - min) / (max - min)

const Column = ({ value, max, min, label }) => {
  const normalizedValue = normalizeRange(value, max, min)
  return (
    <div className="ola_chartColumn-column" style={{ '--value': normalizedValue }}>
      <div className="ola_chartColumn-label">{label}</div>
      <div className="ola_chartColumn-graphic"></div>
    </div>
  )
}

const ChartColumn = ({ rows }) => {
  const extractValues = rows.map( data => data.value )
  return (
    <div className="ola_chartColumn">
      { rows.map( (data, idx) => 
        <Column 
          key={idx} 
          value={ data.value}
          max={Math.max(...extractValues)}
          min={Math.min(...extractValues)}
          label={data.label} /> ) 
      }
    </div>
  )
}

ChartColumn.propTypes = {
  /** Childen input node */
  rows: PT.array.isRequired
}

export default ChartColumn
  