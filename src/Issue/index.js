import React from 'react'
import { default as PT } from 'prop-types'
import cx from 'classnames'
import Icon from '../Icon'

const getIssueIcon = (variant) =>
  ({
    success: 'success',
    warning: 'warning',
    suggested: 'help',
  }[variant] || 'error')

const Issue = ({ title, variant, size, status, className, ...props }) => {
  const styles = cx(
    'ola_issue',
    'ola_issue-header',
    `is-${variant}`,
    `is-${size}`,
    { 'ola-skeleton': status !== 'loaded' },
    { 'is-loading': status === 'loading' },
    className
  )
    
  return <div className={styles} {...props}>
    { status === 'loaded'
      ? <>
        <Icon name={getIssueIcon(variant)} size={size} className="ola_issue-status" />
        <strong className="ola_issue-title">{title}</strong>
      </>
      : <>
        <Icon name={getIssueIcon(variant)} status={status} size={size} className="ola_issue-status" />
        <strong className="ola_issue-title"></strong>
      </>
    }
  </div>
}

Issue.defaultProps = {
  className: null,
  variant: 'error',
  size: 'medium',
  status: 'loaded',
}

Issue.propTypes = {
  /** Issue variants */
  variant: PT.oneOf(['success', 'error', 'suggested', 'warning']),
  /** Title of header */
  title: PT.oneOfType([PT.string, PT.arrayOf(PT.node), PT.node]),
  /** Size variant */
  size: PT.oneOf(['small', 'medium']),
  /** Kpi status */
  status: PT.oneOf(['loaded', 'loading', 'empty']),
  /** Extra className */
  className: PT.string
}

export default Issue
