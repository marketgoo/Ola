import React from 'react'
import {default as PT} from 'prop-types'
import cx from 'classnames'
import { Icon } from '../Icon'

const TaskIcon = ({ variant }) => {
  switch (variant) {
  case 'success': return (<Icon name='success' extraClass='ola_task-status' />)
  case 'warning': return (<Icon name='warning' extraClass='ola_task-status' />)
  case 'suggested': return (<Icon name='help' extraClass='ola_task-status' />)
  default: return (<Icon name='error' extraClass='ola_task-status' />)
  }
}

const TaskTitle = ({ title, htmlTitle, extra }) => 
  <>
    {htmlTitle ?
      <span className="ola_task-title" dangerouslySetInnerHTML={{__html: title}} /> :
      <span className="ola_task-title">{title}</span>
    }
    {extra && <div className="ola_task-extra">{extra}</div>}
  </>

const TaskSumary = ({ title, htmlTitle, variant, extra }) => {
  return (
    <summary className="ola_task-summary">
      <div className={'ola_task-header'}>
        <TaskIcon variant={variant} />
        <TaskTitle title={title} htmlTitle={htmlTitle} extra={extra} />
        <span className="ola_task-icon ola_buttonIcon">
          <Icon name="close" extraClass="ola_task-icon-close" />
        </span>
      </div>
    </summary>
  )
}

const Task = ({ title, htmlTitle, variant, children, extra, ...props }) => {
  const hasChildren = React.Children.count(children) > 0
  return hasChildren ?
    (
      <details className={cx('ola_task', variant && `is-${variant}`)} {...props}>
        <TaskSumary title={title} htmlTitle={htmlTitle} variant={variant} extra={extra} />
        <div className='ola_task-content'>
          { children }
        </div>
      </details>
    ) :
    (
      <div className={cx('ola_task', variant && `is-${variant}`)}>
        <div className="ola_task-header">
          <TaskIcon variant={variant} />
          <TaskTitle title={title} htmlTitle={htmlTitle} extra={extra} />
        </div>
      </div>
    )
}


Task.defaultProps = {
  variant: 'error',
  htmlTitle: false
}

Task.propTypes = {
  /** Task variants */
  variant: PT.oneOf(['success', 'error', 'suggested', 'warning']),
  /** Title of header */
  title: PT.string.isRequired,
  /** Title support HTML tags */
  htmlTitle: PT.bool,
  /** Childen nodes */
  children: PT.oneOfType([
    PT.string,
    PT.arrayOf(PT.node),
    PT.node
  ]),
  /** Title right component  */
  extra: PT.node,
  /** Open or close the Task */
  open: PT.bool,
  /** on toggle event */
  onToggle: PT.func
}

export { Task }
