import React from 'react'
import {default as PT} from 'prop-types'

const Panel = ({ children }) => {
  return (
    <section className="panel">
      {children}
    </section>
  )
}

Panel.propTypes = {
  /** Childen nodes */
  children: PT.oneOfType([
    PT.arrayOf(PT.node),
    PT.node
  ]).isRequired
}

export { Panel }
