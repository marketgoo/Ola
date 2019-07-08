import React from 'react'
import {default as PT} from 'prop-types'
import cx from 'classnames'
import { Icon } from '../Icon'
import { Spinner } from '../Spinner'

const defaultIcons = {
  error: 'warning',
  positive: 'success',
  negative: 'error'
};

const MetricValue = ({busy=false, variant, valueIcon, children}) => {
  return (
    <strong className="ola_metric-value">
      { busy && <Spinner extraClass="ola_metric-icon" /> }
      { (variant === 'error') && <Icon name={defaultIcons.error} extraClass="ola_metric-icon" /> }
      { (valueIcon && variant && variant !== 'error') && <Icon name={defaultIcons[variant]} extraClass="ola_metric-icon" /> }
      {children}
    </strong>
  )
}

const Metric = ({ title, value, description, variant, valueIcon, busy, extraClass, ...props }) => {
  return (
    <div className={cx('ola_metric', variant && `is-${variant}`, busy && 'is-busy', extraClass)} {...props}>
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
  variant: PT.oneOf(['error', 'positive', 'negative']),
  /** Icon for value variants */
  valueIcon: PT.bool,
  /** Busy state */
  busy: PT.bool
}

export { Metric }
