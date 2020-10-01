import React from 'react'
import {default as PT} from 'prop-types'
import cx from 'classnames'

const Kpi = ({ title, value, description, status, className, ...props }) => {
  const styles = cx(
    'ola_kpi',
    { 'ola-skeleton': status !== 'loaded' },
    { 'is-loading': status === 'loading' },
    className
  )

  return (
    <div className={cx(styles)} {...props}>
      { status === 'loaded'
        ? <>
          <div className="ola_kpi-title">{title}</div> 
          <div className="ola_kpi-value">{value}</div>
          { description && <div className="ola_kpi-description">{description}</div>}
        </>
        : <>
          <div className="ola_kpi-title"></div> 
          <div className="ola_kpi-value"></div>
          <div className="ola_kpi-description"></div>
        </>
      }
    </div>
  )
}
  
Kpi.defaultProps = {
  title: null,
  value: null,
  description: null,
  status: 'loaded',
  className: null
}

Kpi.propTypes = {
  /** Kpi title */
  title: PT.oneOfType([
    PT.string,
    PT.arrayOf(PT.node),
    PT.node
  ]).isRequired,
  /** Kpi Value */
  value: PT.oneOfType([
    PT.string,
    PT.arrayOf(PT.node),
    PT.node
  ]),
  /** Kpi Description */
  description: PT.oneOfType([
    PT.string,
    PT.arrayOf(PT.node),
    PT.node
  ]),
  /** Kpi status */
  status: PT.oneOf(['loaded', 'loading', 'empty']),
  /** Extra className */
  className: PT.string,
}

export default Kpi