import React from 'react'
import {default as PT} from 'prop-types'
import cx from 'classnames'

const Label = ({ value, children, className, colors }) => {
  const styles = cx('ola_chartLine-label', className)
  const values = value.map((v, i) => {
    return {value: v, color: colors[i]}
  })
  return (
    <div className={styles} style={{ '--value': Math.max(...value) }}>
      { children }
      { values.reverse().map((v, i) => <span key={i} className="ola_chartLine-point" style={{ '--value': v.value, '--color': v.color }}></span>) }
    </div>
  )
}

Label.defaultProps = {
  value: [0],
  className: null,
  colors: []
}

Label.propTypes = {
  /** Value between 0 and 1 */
  value: PT.arrayOf(PT.number).isRequired,
  /** Colors for every value */
  colors: PT.arrayOf(PT.string),
  /** Extra className */
  className: PT.string,
  /** Childen nodes */
  children: PT.oneOfType([
    PT.arrayOf(PT.node),
    PT.node
  ])
}

export default Label