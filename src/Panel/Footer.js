import React from 'react'
import {default as PT} from 'prop-types'

const PanelFooter = ({ children, panelButtons, ...props }) => {

  return panelButtons ? (
    <footer className="panel-footer" {...props}>
      <div className="button-group panel-buttons">
        {children}
      </div>
    </footer>
  ) : (
    <footer className="panel-footer" {...props}>
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
