import React from 'react'
import { default as PT } from 'prop-types'
import Icon from '../Icon'

const IssueIcon = ({ variant }) =>
  ({
    success: <Icon name="success" className="ola_issue-status" />,
    warning: <Icon name="warning" className="ola_issue-status" />,
    suggested: <Icon name="help" className="ola_issue-status" />,
  }[variant] || <Icon name="error" className="ola_issue-status" />)

const IssueTitle = ({ title, link }) => (
  <>
    <span className="ola_issue-title">{title}</span>
    {link && <Icon name="chevronRight" />}
  </>
)

const Issue = ({ title, variant, link }) => (
  <a href={link} className={`ola_issue is-${variant}`}>
    <div className="ola_issue-header">
      <IssueIcon variant={variant} />
      <IssueTitle title={title} link={link} />
    </div>
  </a>
)

Issue.defaultProps = {
  variant: 'error',
}

Issue.propTypes = {
  /** Issue variants */
  variant: PT.oneOf(['success', 'error', 'suggested', 'warning']),
  /** Title of header */
  title: PT.oneOfType([PT.string, PT.arrayOf(PT.node), PT.node]).isRequired,
  /** Title right component  */
  link: PT.string,
}

export default Issue
