import React from 'react'
import {default as PT} from 'prop-types'
import cx from 'classnames'
import { getElementType } from '../utils'

const TaskTitle = ({ title, htmlTitle=false, ...props }) => {
  const ElementType = getElementType(TaskTitle, {...props})
  return htmlTitle ?
    <ElementType className="task-title" dangerouslySetInnerHTML={{__html: title}} /> :
    <ElementType className="task-title"></ElementType>
}

const TaskFooter = () => {
  return (
    <footer className="task-footer">
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

const Task = ({ title, htmlTitle, variant, children }) => {
  return (
    <li className={cx('ola_task', variant && `is-${variant}`)}>
      <TaskTitle title={title} htmlTitle={htmlTitle} />
      { variant === 'error' && (
        <div className="task-content">
          <TaskBody>{children}</TaskBody>
          <TaskFooter />
        </div>
      )}
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
  ]).isRequired
}

export { Task }
