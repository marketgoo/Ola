import React from 'react'
import {default as PT} from 'prop-types'
import cx from 'classnames'

const TaskGroup = ({ extraClass, children }) => {

  const childrenWrapper = React.Children.map(children, child => {
    return (
      <li>{child}</li>
    )
  })

  return (
    <ul className={cx('ola_task-group', extraClass)}>
      { childrenWrapper }
    </ul>
  )
}


TaskGroup.defaultProps = {
  extraClass: null
}

TaskGroup.propTypes = {
  /** Extra className */
  extraClass: PT.string,
  /** Childen nodes */
  children: PT.oneOfType([
    PT.string,
    PT.arrayOf(PT.node),
    PT.node
  ]).isRequired
}

export { TaskGroup }
