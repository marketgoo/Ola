import React, { useState } from 'react'
import {default as PT} from 'prop-types'
import cx from 'classnames'
import Tooltip from '../Tooltip'

const ChartLineLabel = ({ ID, value, footer, children, className, colors, tooltip }) => {
  const [showTooltip, setShowTooltip] = useState()
  const styles = cx('ola_chartLine-value', className)
  const values = value.map((v, i) => {
    return {value: v, color: colors[i]}
  })

  const onEnter = () => setShowTooltip(true)
  const onLeave = () => setShowTooltip(false)

  return (
    <div className={styles} style={{ '--value': Math.max(...value) }} onMouseEnter={tooltip && onEnter} onMouseLeave={tooltip && onLeave}>
      <div className="ols_chartLine-label">
        { children }
        {tooltip &&  
          <Tooltip open={showTooltip}>
            {tooltip}
          </Tooltip>
        }
      </div>
      { values.reverse().map((v, i) => v.value === null ? null : <span key={i} className="ola_chartLine-point" style={{ '--value': v.value, '--color': v.color }}></span>)}
      <div className="ola_chartLine-space"></div>
      <div className="ola_chartLine-footer">{ footer }</div>
    </div>
  )
}

ChartLineLabel.defaultProps = {
  value: [0],
  className: null,
  colors: [],
  onHover: null
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
  /** Tooltip's content */
  tooltip: PT.node,
  /** Childen nodes */
  children: PT.oneOfType([
    PT.arrayOf(PT.node),
    PT.node
  ])
}

export default ChartLineLabel