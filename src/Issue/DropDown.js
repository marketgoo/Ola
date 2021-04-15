import React, { useRef, useEffect, useState, useCallback } from 'react'
import {default as PT} from 'prop-types'
import cx from 'classnames'
import Issue from './'
import Icon from '../Icon'

const IssueDropDown = ({ title, variant, size, className, status, children, ...props }) => {
  
  const details = useRef()
  const [isOpen, setIsOpen] = useState()

  const listenerFn = useCallback(
    () => {
      setIsOpen(!isOpen)
    },
    [isOpen],
  )


  useEffect(() => {

    if (details && details.current) {

      details.current.addEventListener('toggle', listenerFn)

      return () => {
        details.current.removeEventListener('toggle', listenerFn)
      }
    }

  }, [listenerFn])

  if (status !== 'loaded') {
    return <Issue variant={variant} size={size} status={status} />
  }

  return <details ref={details} className={cx('ola_issue-dropdown', `is-${variant}`, `is-${size}`, className)} {...props}>
    <summary className="ola_issue-summary">
      <Issue title={title} variant={variant} size={size} />
      <Icon name={isOpen ? 'chevronLeft' : 'chevronDown'} size={size} />
    </summary>
    <div className='ola_issue-content'>
      { children }
    </div>
  </details>
}

IssueDropDown.defaultProps = { 
  className: null,
  variant: 'error',
  size: 'medium',
  status: 'loaded',
}

IssueDropDown.propTypes = {
  /** Issue variants */
  variant: PT.oneOf(['success', 'error', 'suggested', 'warning']),
  /** Title of header */
  title: PT.oneOfType([PT.string, PT.arrayOf(PT.node), PT.node]).isRequired,
  /** Size variant */
  size: PT.oneOf(['small', 'medium', 'big']),
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
  /** Kpi status */
  status: PT.oneOf(['loaded', 'loading', 'empty']),
  /** on toggle event */
  onToggle: PT.func
}

export default IssueDropDown
