import React from 'react'
import {default as PT} from 'prop-types'
import cx from 'classnames'

const PanelContent = ({ children, title, htmlTitle, variant, extraClass, ...props }) => {
  // const styles = variant ? cx('panel-content', `is-${variant}`, extraClass) : cx('panel-content', extraClass)
  return (
    <div className={cx('panel-content', variant && `is-${variant}`, extraClass)} {...props}>
      { title && ( htmlTitle ? <h2 className="panel-subtitle" dangerouslySetInnerHTML={{__html: title}} /> : <h2 className="panel-subtitle">{title}</h2>) }
      <div>
        {children}
      </div>
    </div>
  )
}

PanelContent.propTypes = {
  /** Content Title */
  title: PT.string,
  /** Title support HTML tags */
  htmlTitle: PT.bool,
  /** PanelContent variants */
  variant: PT.oneOf(['fullwidth']),
  /** Extra className */
  extraClass: PT.string,
  /** Childen nodes */
  children: PT.oneOfType([
    PT.arrayOf(PT.node),
    PT.node
  ]).isRequired
}

export { PanelContent }
