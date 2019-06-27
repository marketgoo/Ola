import React from 'react'
import {default as PT} from 'prop-types'
import cx from 'classnames'

const PanelContent = ({ children, title, htmlTitle, variant, extraClass, ...props }) => {
  // const styles = variant ? cx('panel-content', `is-${variant}`, extraClass) : cx('panel-content', extraClass)
  return (
    <div className={cx('ola_panel-content', variant && `is-${variant}`, extraClass)} {...props}>
      { title && ( htmlTitle ? <h2 className="ola_panel-subtitle" dangerouslySetInnerHTML={{__html: title}} /> : <h2 className="ola_panel-subtitle">{title}</h2>) }
      <div>
        {children}
      </div>
    </div>
  )
}

PanelContent.defaultProps = {
  title: null,
  extraClass: null,
  variant: null,
  htmlTitle: false
}

PanelContent.propTypes = {
  /** Content Title */
  title: PT.string,
  /** Title support HTML tags */
  htmlTitle: PT.bool,
  /** PanelContent variants */
  variant: PT.oneOf(['fullwidth', 'highlight']),
  /** Extra className */
  extraClass: PT.string,
  /** Childen nodes */
  children: PT.oneOfType([
    PT.arrayOf(PT.node),
    PT.node
  ]).isRequired
}

export { PanelContent }
