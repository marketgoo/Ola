import React from 'react'
import {default as PT} from 'prop-types'
import cx from 'classnames'
import { Icon } from '../Icon'


const TaskTitle = ({ title, htmlTitle }) => {
  return  htmlTitle ? (
    <div dangerouslySetInnerHTML={{__html: title}} />
  ) : (
    <div>{title}</div>
  )
}

const TaskSumary = ({ title, htmlTitle }) => {
  return (
    <summary className="ola_task-title">
      <Icon name={'help'} extraClass='ola_task-icon' />
      <TaskTitle title={title} htmlTitle={htmlTitle} />
      <Icon name={'close'} extraClass='ola_task-close' />
    </summary>
  )
}

const Task = ({ title, htmlTitle, variant, children }) => {

  const hasClidren = React.isValidElement(children)
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
        <TaskTitle title={title} htmlTitle={htmlTitle} />
      </div>
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
