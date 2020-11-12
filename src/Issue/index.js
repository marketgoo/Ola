import React from 'react'
import { default as PT } from 'prop-types'
import cx from 'classnames'
import Icon from '../Icon'

const IssueIcon = ({ variant, size }) =>
  ({
    success: <Icon name="success" size={size} className="ola_issue-status" />,
    warning: <Icon name="warning" size={size} className="ola_issue-status" />,
    suggested: <Icon name="help" size={size} className="ola_issue-status" />,
  }[variant] || <Icon name="error" size={size} className="ola_issue-status" />)

const Issue = ({ title, variant, size, className, ...props }) => (
  <div className={cx(`ola_issue is-${variant} is-${size}`, className)} {...props}>
    <div className="ola_issue-header">
      <IssueIcon variant={variant} size={size} />
      <strong className="ola_issue-title">{title}</strong>
    </div>
  </div>
)

Issue.defaultProps = {
  className: null,
  variant: 'error',
  size: 'medium'
}

Issue.propTypes = {
  /** Issue variants */
  variant: PT.oneOf(['success', 'error', 'suggested', 'warning']),
  /** Title of header */
  title: PT.oneOfType([PT.string, PT.arrayOf(PT.node), PT.node]).isRequired,
  /** Size variant */
  size: PT.oneOf(['small', 'medium']),
  /** Extra className */
  className: PT.string
}

export default Issue
