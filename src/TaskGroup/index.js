import React from 'react'
import {default as PT} from 'prop-types'
import cx from 'classnames'

const TaskGroup = ({ className, children }) => {

  const childrenWrapper = React.Children.map(children, child => {
    return (
      <li>{child}</li>
    )
  })

  return (
    <ul className={cx('ola_task-group', className)}>
      { childrenWrapper }
    </ul>
  )
}


TaskGroup.defaultProps = {
  className: null
}

TaskGroup.propTypes = {
  /** Extra className */
  className: PT.string,
  /** Childen nodes */
  children: PT.oneOfType([
    PT.string,
    PT.arrayOf(PT.node),
    PT.node
  ]).isRequired
}

export default TaskGroup
