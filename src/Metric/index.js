import React from 'react'
import {default as PT} from 'prop-types'
import cx from 'classnames'
import { Icon } from '../Icon'
import { Spinner } from '../Spinner'

const MetricValue = ({busy=false, variant, valueIcon, children}) => {
  return (
    <strong className={cx('ola_metric-value', busy && 'is-busy')}>
      { busy && <Spinner /> }
      { (variant === 'warning') && <Icon name="warning" /> }
      { (valueIcon && variant && variant !== 'warning') && <Icon name={variant} /> }
      {children}
    </strong>
  )
}

const Metric = ({ title, value, description, variant, valueIcon, busy, extraClass, ...props }) => {
  return (
    <div className={cx('ola_metric', variant && `is-${variant}`, extraClass)} {...props}>
      <strong className="ola_metric-title">{title}</strong>
      <p className="ola_metric-description">{description}</p>
      <MetricValue busy={busy} variant={variant} valueIcon={valueIcon}>
        {value}
      </MetricValue>
    </div>
  )
}

Metric.defaultProps = {
  title: null,
  description: null,
  value: null,
  extraClass: null,
  variant: null,
  valueIcon: false,
  busy: false
}

Metric.propTypes = {
  /** Metric title */
  title: PT.string.isRequired,
  /** Metric description */
  description: PT.string.isRequired,
  /** Metric value */
  value: PT.string,
  /** Extra className */
  extraClass: PT.string,
  /** Tag variants */
  variant: PT.oneOf(['error', 'success', 'warning']),
  /** Icon for value variants */
  valueIcon: PT.bool,
  /** Busy state */
  busy: PT.bool
}

export { Metric }
