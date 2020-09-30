import React from 'react'
import {default as PT} from 'prop-types'
import cx from 'classnames'

const MetricValue = ({busy=false, variant, valueIcon, children}) => {
    return (
      <strong className="ola_metric-value">
        { busy && <Spinner className="ola_metric-icon" /> }
        { (variant === 'error') && <Icon name={defaultIcons.error} className="ola_metric-icon" /> }
        { (valueIcon && variant && variant !== 'error') && <Icon name={defaultIcons[variant]} className="ola_metric-icon" /> }
        {children}
      </strong>
    )
}

const Kpi = ({ title, value, description, variant, busy, className, ...props }) => {
    return (
        <div className={cx('ola_kpi', variant && `is-${variant}`, busy && 'is-busy', className)} {...props}>
            <div className="ola_kpi-title">{title}</div>
            <div className="ola_kpi-value">{value}</div>
            { description && <div className="ola_kpi-description">{description}</div> }
        </div>
    )
}
  
Kpi.defaultProps = {
    title: null,
    value: null,
    description: null,
    variant: null,
    busy: false,
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
    ]).isRequired,
    /** Kpi Description */
    description: PT.oneOfType([
        PT.string,
        PT.arrayOf(PT.node),
        PT.node
    ]),
    /** Kpi variants */
    variant: PT.oneOf(['positive', 'negative']),
    /** Busy state */
    busy: PT.bool,
    /** Extra className */
    className: PT.string,
  }

export default Kpi