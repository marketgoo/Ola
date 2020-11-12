import React from 'react'
import {default as PT} from 'prop-types'
import cx from 'classnames'
import Issue from './'

const IssueDropDown = ({ title, variant, size, className, children, ...props }) =>
  <details className={cx('ola_issue-dropdown', `is-${variant}`, `is-${size}`, className)} {...props}>
    <summary className="ola_issue-summary">
      <Issue title={title} variant={variant} size={size} />
    </summary>
    <div className='ola_issue-content'>
      { children }
    </div>
  </details>


IssueDropDown.defaultProps = { 
  className: null,
  variant: 'error',
  size: 'medium'
}

IssueDropDown.propTypes = {
  /** Issue variants */
  variant: PT.oneOf(['success', 'error', 'suggested', 'warning']),
  /** Title of header */
  title: PT.oneOfType([PT.string, PT.arrayOf(PT.node), PT.node]).isRequired,
  /** Size variant */
  size: PT.oneOf(['small', 'medium']),
  /** Extra className */
  className: PT.string,
  /** Childen nodes */
  children: PT.oneOfType([
    PT.string,
    PT.arrayOf(PT.node),
    PT.node
  ]),
  /** Open or close the Task */
  open: PT.bool,
  /** on toggle event */
  onToggle: PT.func
}

export default IssueDropDown
