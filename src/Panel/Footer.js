import React from 'react'
import {default as PT} from 'prop-types'
import cx from 'classnames'

const PanelFooter = ({ children, className, ...props }) => (
  <footer className={cx('ola_panel-footer', className)} {...props}>
    {children}
  </footer>
)

PanelFooter.defaultProps = {
  className: null
}

PanelFooter.propTypes = {
  /** Extra className */
  className: PT.string,
  /** Childen nodes */
  children: PT.oneOfType([
    PT.arrayOf(PT.node),
    PT.node
  ]).isRequired
}

export default PanelFooter
