import React from 'react'
import {default as PT} from 'prop-types'
import cx from 'classnames'
import { Icon } from '../Icon'
import { Spinner } from '../Spinner'

const defaultIcons = {
  error: 'warning',
  positive: 'success',
  negative: 'error'
}

const MetricFooter = ({ footer, htmlFooter }) => {
  return footer && ( htmlFooter ? <p className="ola_metric-footer" dangerouslySetInnerHTML={{__html: footer}} /> : <p className="ola_metric-footer">{footer}</p>)
}

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

const Metric = ({ title, value, description, variant, valueIcon, busy, extraClass, footer, htmlFooter, ...props }) => {
  return (
    <div className={cx('ola_metric', variant && `is-${variant}`, busy && 'is-busy', footer && 'is-centered', extraClass)} {...props}>
      <strong className="ola_metric-title">{title}</strong>
      { description && !footer && <p className="ola_metric-description">{description}</p> }
      <MetricValue busy={busy} variant={variant} valueIcon={valueIcon}>
        {value}
      </MetricValue>
      <MetricFooter footer={footer} htmlFooter={htmlFooter} />
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
  busy: false,
  footer: null,
  htmlFooter: false
}

Metric.propTypes = {
  /** Metric title */
  title: PT.string.isRequired,
  /** Metric description */
  description: PT.string,
  /** Metric value */
  value: PT.string,
  /** Extra className */
  extraClass: PT.string,
  /** Tag variants */
  variant: PT.oneOf(['error', 'positive', 'negative']),
  /** Icon for value variants */
  valueIcon: PT.bool,
  /** Busy state */
  busy: PT.bool,
  /** Footer */
  footer: PT.string,
  /** Footer support HTML tags */
  htmlFooter: PT.bool
}

export { Metric }
