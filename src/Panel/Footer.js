import React from 'react'
import {default as PT} from 'prop-types'

const PanelFooter = ({ children, panelButtons, ...props }) => {

  return panelButtons ? (
    <footer className="ola_panel-footer" {...props}>
      <div className="ola_button-group ola_panel-buttons">
        {children}
      </div>
    </footer>
  ) : (
    <footer className="ola_panel-footer" {...props}>
      {children}
    </footer>
  )
}

PanelFooter.defaultProps = {
  panelButtons: true
}

PanelFooter.propTypes = {
  /** Footer only contains buttons */
  panelButtons: PT.bool,
  /** Childen nodes */
  children: PT.oneOfType([
    PT.arrayOf(PT.node),
    PT.node
  ]).isRequired
}

export { PanelFooter }
