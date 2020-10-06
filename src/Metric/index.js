import React from 'react'
import {default as PT} from 'prop-types'
import cx from 'classnames'
import Icon from '../Icon'
import Spinner from '../Spinner'

const defaultIcons = {
  error: 'warning',
  positive: 'success',
  negative: 'error'
}

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

const Metric = ({ title, value, description, variant, valueIcon, busy, className, footer, ...props }) => {
  return (
    <div className={cx('ola_metric', variant && `is-${variant}`, busy && 'is-busy', footer && 'is-centered', className)} {...props}>
      <strong className="ola_metric-title">{title}</strong>
      { description && !footer && <p className="ola_metric-description">{description}</p> }
      <MetricValue busy={busy} variant={variant} valueIcon={valueIcon}>
        {value}
      </MetricValue>
      { footer && <p className="ola_metric-footer">{footer}</p> }
    </div>
  )
}

Metric.defaultProps = {
  title: null,
  description: null,
  value: null,
  className: null,
  variant: null,
  valueIcon: false,
  busy: false,
  footer: null
}

Metric.propTypes = {
  /** Metric title */
  title: PT.string.isRequired,
  /** Metric description */
  description: PT.string,
  /** Metric value */
  value: PT.string,
  /** Extra className */
  className: PT.string,
  /** Metric variants */
  variant: PT.oneOf(['error', 'positive', 'negative']),
  /** Icon for value variants */
  valueIcon: PT.bool,
  /** Busy state */
  busy: PT.bool,
  /** Footer */
  footer: PT.oneOfType([
    PT.string,
    PT.arrayOf(PT.node),
    PT.node
  ])
}

export default Metric
