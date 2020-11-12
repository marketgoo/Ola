import React from 'react'
import { default as PT } from 'prop-types'
import Icon from '../Icon'

const IssueIcon = ({ variant, size }) =>
  ({
    success: <Icon name="success" size={size} className="ola_issue-status" />,
    warning: <Icon name="warning" size={size} className="ola_issue-status" />,
    suggested: <Icon name="help" size={size} className="ola_issue-status" />,
  }[variant] || <Icon name="error" size={size} className="ola_issue-status" />)

const IssueTitle = ({ title, link, size }) => (
  <>
    <span className={'ola_issue-title ola-bold ' + (size === 'small' ? 'ola-callout' : 'ola-body')}>{title}</span>
    {link && <Icon name="chevronRight" />}
  </>
)

const Issue = ({ title, variant, link, size }) => (
  <div href={link} className={`ola_issue is-${variant}`}>
    <div className="ola_issue-header">
      <IssueIcon variant={variant} size={size} />
      <IssueTitle title={title} link={link} size={size} />
    </div>
  </div>
)

Issue.defaultProps = {
  variant: 'error',
  size: 'medium'
}

Issue.propTypes = {
  /** Issue variants */
  variant: PT.oneOf(['success', 'error', 'suggested', 'warning']),
  /** Title of header */
  title: PT.oneOfType([PT.string, PT.arrayOf(PT.node), PT.node]).isRequired,
  /** Title right component  */
  link: PT.string,
  /** Size variant */
  size: PT.oneOf(['small', 'medium'])
}

export default Issue
