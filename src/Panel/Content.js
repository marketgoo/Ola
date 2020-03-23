import React from 'react'
import {default as PT} from 'prop-types'
import cx from 'classnames'

const PanelContent = ({ children, title, variant, className, ...props }) => {
  return <>
    { title && <h2 className="ola_panel-subtitle">{title}</h2> }
    <div className={cx('ola_panel-content', variant && `is-${variant}`, className)} {...props}>
      {children}
    </div>
  </>
}

PanelContent.defaultProps = {
  title: null,
  className: null,
  variant: null
}

PanelContent.propTypes = {
  /** Content Title */
  title: PT.oneOfType([
    PT.string,
    PT.arrayOf(PT.node),
    PT.node
  ]),
  /** PanelContent variants */
  variant: PT.oneOf(['fullwidth', 'highlight']),
  /** Extra className */
  className: PT.string,
  /** Childen nodes */
  children: PT.oneOfType([
    PT.string,
    PT.arrayOf(PT.node),
    PT.node
  ]).isRequired
}

export default PanelContent
