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

const TaskTitle = ({ title, htmlTitle, buttonLabel, onButtonClick }) => {
  const handleClick = e => {
    e.preventDefault()
    if (onButtonClick){
      onButtonClick()
    }
  }
  return  htmlTitle ? (
    <div dangerouslySetInnerHTML={{__html: title}} />
  ) : (
    <div>
      <span className="ola_task-title-text">{title}</span>
      {buttonLabel && onButtonClick && <Button variant="secondary" onClick={handleClick}>{buttonLabel}</Button>}
    </div>
  )
}

const TaskSumary = ({ title, htmlTitle, variant, buttonLabel, onButtonClick }) => {
  return (
    <summary className="ola_task-summary">
      <div className={'ola_task-title'}>
        <TaskIcon variant={variant} />
        <TaskTitle title={title} htmlTitle={htmlTitle} buttonLabel={buttonLabel} onButtonClick={onButtonClick} />
        <span className="ola_task-icon ola_buttonIcon">
          <Icon name="close" extraClass="ola_task-icon-close" />
        </span>
      </div>
    </summary>
  )
}

const Task = ({ title, htmlTitle, variant, children, buttonLabel, onButtonClick }) => {

  const hasChildren = React.Children.count(children) > 0
  return hasChildren ?
    (
      <details className={cx('ola_task', variant && `is-${variant}`, buttonLabel && onButtonClick && 'is-button')}>
        <TaskSumary title={title} htmlTitle={htmlTitle} variant={variant} buttonLabel={buttonLabel} onButtonClick={onButtonClick} />
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
  ]),
  /** Title right button label  */
  buttonLabel: PT.string,
  /** Title right button event */
  onButtonClick: PT.func
}

export { Task }
