import React from 'react'
import {default as PT} from 'prop-types'

const PanelFooter = ({ children, ...props }) => (
  <footer className="ola_panel-footer" {...props}>
    {children}
  </footer>
)

PanelFooter.propTypes = {
  /** Childen nodes */
  children: PT.oneOfType([
    PT.arrayOf(PT.node),
    PT.node
  ]).isRequired
}

export { PanelFooter }
