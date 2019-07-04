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

const TaskTitle = ({ title, htmlTitle }) => {
  return  htmlTitle ? (
    <div dangerouslySetInnerHTML={{__html: title}} />
  ) : (
    <div>{title}</div>
  )
}

const TaskSumary = ({ title, htmlTitle, variant }) => {
  return (
    <summary className="ola_task-title">
      <TaskIcon variant={variant} />
      <TaskTitle title={title} htmlTitle={htmlTitle} />
      <span className="ola_task-icon ola_buttonIcon">
        <Icon name="close" extraClass="ola_task-icon-close" />
        <Icon name="chevronDown" extraClass="ola_task-icon-open" />
      </span>
    </summary>
  )
}

const Task = ({ title, htmlTitle, variant, children }) => {

  const hasChildren = React.Children.count(children) > 0
  return hasChildren ?
    (
      <details className={cx('ola_task', variant && `is-${variant}`)}>
        <TaskSumary title={title} htmlTitle={htmlTitle} variant={variant} />
        <div className='ola_task-content'>
          { children }
        </div>
      </details>
    ) :
    (
      <div className={cx('ola_task', variant && `is-${variant}`)}>
        <div className="ola_task-title">
          <TaskIcon variant={variant} />
          <TaskTitle title={title} htmlTitle={htmlTitle} />
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
  ])
}

export { Task }
