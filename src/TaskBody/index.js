import React from 'react'
import {default as PT} from 'prop-types'

const TaskBody = ({ children }) => <div className="ola_task-body">{children}</div>

TaskBody.propTypes = {
  /** Childen nodes */
  children: PT.oneOfType([
    PT.string,
    PT.arrayOf(PT.node),
    PT.node
  ]).isRequired
}

export { TaskBody }
