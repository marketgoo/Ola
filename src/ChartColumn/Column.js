import React from 'react'
import {default as PT} from 'prop-types'
import cx from 'classnames'

const Column = ({ value, footer, children, className, status, color }) => {
  const styles = cx(
    'ola_chartColumn-value',
    { 'ola-skeleton': status !== 'loaded' },
    { 'is-loading': status === 'loading' },
    className
  )

  return (
    <div className={styles} style={{ '--value': value, '--color': color }}>
      <div className="ola_chartColumn-label">{ children }</div>
      <div className="ola_chartColumn-graphic"></div>
      { <div className="ola_chartColumn-footer">{ footer }</div> }
    </div>
  )
}

Column.defaultProps = {
  value: 0,
  className: null,
  color: null,
  status: 'loaded'
}

Column.propTypes = {
  /** Value between 0 and 1 */
  value: PT.number,
  /** Extra className */
  className: PT.string,
  /** Color of the column */
  color: PT.string,
  /** Footer nodes */
  footer: PT.oneOfType([
    PT.arrayOf(PT.node),
    PT.node
  ]),
  /** Childen nodes */
  children: PT.oneOfType([
    PT.arrayOf(PT.node),
    PT.node
  ]),
  /** Value status */
  status: PT.oneOf(['loaded', 'loading', 'empty']),
}

export default Column