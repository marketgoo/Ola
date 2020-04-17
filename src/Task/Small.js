import React from 'react'
import {default as PT} from 'prop-types'
import cx from 'classnames'
import { getElementType } from '../utils'
import Icon from '../Icon'

const TaskIcon = ({ variant }) => {
  switch (variant) {
  case 'success': return (<Icon name='success' size="small" className='ola_task-status' />)
  case 'warning': return (<Icon name='warning' size="small" className='ola_task-status' />)
  case 'suggested': return (<Icon name='help' size="small" className='ola_task-status' />)
  default: return (<Icon name='error' size="small" className='ola_task-status' />)
  }
}

const TaskSmall = ({ variant, children, as, className, ...props }) => {
  const ElementType = getElementType(TaskSmall, { as: as, ...props })

  return (
    <ElementType className={cx('ola_task', 'is-small', className, variant && `is-${variant}`)} {...props}>
      <p className="ola_task-header">
        <TaskIcon variant={variant} />
        <span className="ola_task-title">{children}</span>
      </p>
    </ElementType>
  )
}

TaskSmall.defaultProps = {
  as: 'div',
  variant: 'error',
  className: null,
}

TaskSmall.propTypes = {
  /** Render Task with any html tag */
  as: PT.string,
  variant: PT.oneOf(['success', 'error', 'suggested', 'warning']),
  /** Extra className */
  className: PT.string,
  /** Childen nodes */
  children: PT.oneOfType([
    PT.string,
    PT.arrayOf(PT.node),
    PT.node
  ]).isRequired
}

export default TaskSmall
