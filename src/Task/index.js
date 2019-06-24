import React from 'react'
import {default as PT} from 'prop-types'
import cx from 'classnames'
import { Icon } from '../Icon'
import { Button } from '../Button'
import { ButtonGroup } from '../ButtonGroup'


const TaskSumary = ({ title, htmlTitle }) => {
  return (
    <summary className="task-title">
      <Icon name={'help'} extraClass='task-icon' />
      { htmlTitle ? <div dangerouslySetInnerHTML={{__html: title}} /> : <div>{title}</div> }
      <Icon name={'close'} extraClass='task-close' />
    </summary>
  )
}

const TaskFooter = ({ children }) => {
  return (
    <footer className="task-footer">
      { children }
    </footer>
  )
}

const TaskBody = ({ children}) => {
  return (
    <div className="task-body">
      {children}
    </div>
  )
}

const ErrorTask = ({title, htmlTitle, children}) => {
  return (
    <details>
      <TaskSumary title={title} htmlTitle={htmlTitle} />
      <div className='task-content'>
        <TaskBody>{ children }</TaskBody>
        <TaskFooter>
          <ButtonGroup>
            <Button variant="primary">Done! Check it now</Button>
          </ButtonGroup>
        </TaskFooter>
      </div>
    </details>
  )
}

const SuccessTask = ({ title, htmlTitle }) => {
  return (
    <div className="task-title">
      <Icon name={'help'} extraClass='task-icon' />
      { htmlTitle ? <div dangerouslySetInnerHTML={{__html: title}} /> : <div>{title}</div> }
    </div>
  )
}

const Task = ({ title, htmlTitle, variant, children }) => {
  return (
    <li className={cx('ola_task', variant && `is-${variant}`)}>
      { variant === 'error' &&  <ErrorTask title={title} htmlTitle={htmlTitle}>{children}</ErrorTask> }
      { variant === 'success' && <SuccessTask title={title} htmlTitle={htmlTitle} /> }
    </li>
  )
}


Task.defaultProps = {
  variant: 'error',
  htmlTitle: false
}

Task.propTypes = {
  /** Task variants */
  variant: PT.oneOf(['success', 'error', 'suggestion', 'warning']),
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
