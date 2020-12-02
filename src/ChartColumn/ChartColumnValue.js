import React from 'react'
import {default as PT} from 'prop-types'

const ChartColumnValue = ({ value, footer, children,  }) => {
  return (
    <div className="ola_chartColumn-value" style={{ '--value': value }}>
      <div className="ola_chartColumn-label">{ children }</div>
      <div className="ola_chartColumn-graphic"></div>
      { footer && <div className="ola_chartColumn-footer">{ footer }</div> }
    </div>
  )
}

ChartColumnValue.defaultProps = {
  value: 0
}

ChartColumnValue.propTypes = {
  /** Value between 0 and 1 */
  value: PT.number,
  /** Footer nodes */
  footer: PT.oneOfType([
    PT.arrayOf(PT.node),
    PT.node
  ]),
  /** Childen nodes */
  children: PT.oneOfType([
    PT.arrayOf(PT.node),
    PT.node
  ])
}

export default ChartColumnValue