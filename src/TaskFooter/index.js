import React from 'react'
import {default as PT} from 'prop-types'

const TaskFooter = ({ children }) => <footer className="ola_task-footer">{children}</footer>

TaskFooter.propTypes = {
  /** Childen nodes */
  children: PT.oneOfType([
    PT.string,
    PT.arrayOf(PT.node),
    PT.node
  ]).isRequired
}

export { TaskFooter }
