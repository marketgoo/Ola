import React from 'react'
import {default as PT} from 'prop-types'
import cx from 'classnames'
import { Icon } from '../Icon'
import { Button } from '../Button'

const TaskIcon = ({ variant }) => {
  switch (variant) {
  case 'success': return (<Icon name='success' extraClass='ola_task-status' />)
  case 'warning': return (<Icon name='warning' extraClass='ola_task-status' />)
  case 'suggested': return (<Icon name='help' extraClass='ola_task-status' />)
  default: return (<Icon name='error' extraClass='ola_task-status' />)
  }
}

const TaskTitle = ({ title, htmlTitle, extraButton }) => {
  return  htmlTitle ? (
    <div dangerouslySetInnerHTML={{__html: title}} />
  ) : (
    <div>
      <span className="ola_task-title-text">{title}</span>
      {extraButton && extraButton.type === Button && extraButton}
    </div>
  )
}

const TaskSumary = ({ title, htmlTitle, variant, extraButton }) => {
  return (
    <summary className="ola_task-summary">
      <div className={'ola_task-title'}>
        <TaskIcon variant={variant} />
        <TaskTitle title={title} htmlTitle={htmlTitle} extraButton={extraButton} />
        <span className="ola_task-icon ola_buttonIcon">
          <Icon name="close" extraClass="ola_task-icon-close" />
        </span>
      </div>
    </summary>
  )
}

const Task = ({ title, htmlTitle, variant, children, extraButton }) => {

  const hasChildren = React.Children.count(children) > 0
  return hasChildren ?
    (
      <details className={cx('ola_task', variant && `is-${variant}`, extraButton && 'is-button')}>
        <TaskSumary title={title} htmlTitle={htmlTitle} variant={variant} extraButton={extraButton} />
        <div className='ola_task-content'>
          { children }
        </div>
      </details>
    ) :
    (
      <div className={cx('ola_task', variant && `is-${variant}`, extraButton && 'is-button')}>
        <div className="ola_task-title">
          <TaskIcon variant={variant} />
          <TaskTitle title={title} htmlTitle={htmlTitle} extraButton={extraButton} />
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
  /** Title right button  */
  extraButton: (props, propName, componentName) => {
    if (!props[propName] || props[propName].type === Button){
      return null
    }
    return new Error(`Invalid extraButton prop supplied to ${componentName}. You have to pass a valid Button component`)
  }
}

export { Task }
