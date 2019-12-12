import React from 'react'
import {default as PT} from 'prop-types'

const TaskInfo = ({ children }) => <div className="ola_task-info">{children}</div>

TaskInfo.propTypes = {
  /** Childen nodes */
  children: PT.oneOfType([
    PT.string,
    PT.arrayOf(PT.node),
    PT.node
  ]).isRequired
}

export { TaskInfo }
