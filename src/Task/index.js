import React from 'react'
import {default as PT} from 'prop-types'
import cx from 'classnames'
import { Icon } from '../Icon'

const TaskIcon = ({ variant }) => {
  switch (variant) {
  case 'success': return (<Icon name={'help'} extraClass='ola_task-icon' />)
  case 'warning': return (<Icon name={'help'} extraClass='ola_task-icon' />)
  case 'suggested': return (<Icon name={'help'} extraClass='ola_task-icon' />)
  default: return (<Icon name={'help'} extraClass='ola_task-icon' />)
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
      <Icon name={'close'} extraClass='ola_task-close' />
    </summary>
  )
}

const Task = ({ title, htmlTitle, variant, children }) => {

  const hasClidren = React.Children.count(children) > 0
  return hasClidren ?
    (
      <details className={cx('ola_task', variant && `is-${variant}`)}>
        <TaskSumary title={title} htmlTitle={htmlTitle} />
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
