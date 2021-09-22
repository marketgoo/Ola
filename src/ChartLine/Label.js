import React from 'react'
import {default as PT} from 'prop-types'
import cx from 'classnames'

const ChartLineLabel = ({ value, footer, children, className, colors }) => {
  const styles = cx('ola_chartLine-value', className)
  const values = value.map((v, i) => {
    return {value: v, color: colors[i]}
  })
  return (
    <div className={styles} style={{ '--value': Math.max(...value) }}>
      <div className="ols_chartLine-label">{ children }</div>
      { values.reverse().map((v, i) => v.value === null ? null : <span key={i} className="ola_chartLine-point" style={{ '--value': v.value, '--color': v.color }}></span>) }
      <div className="ola_chartLine-space"></div>
      <div className="ola_chartLine-footer">{ footer }</div>
    </div>
  )
}

ChartLineLabel.defaultProps = {
  value: [0],
  className: null,
  colors: []
}

ChartLineLabel.propTypes = {
  /** Value between 0 and 1 */
  value: PT.arrayOf(PT.number).isRequired,
  /** Colors for every value */
  colors: PT.arrayOf(PT.string),
  /** Extra className */
  className: PT.string,
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

export default ChartLineLabel