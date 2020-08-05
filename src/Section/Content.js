import React from 'react'
import {default as PT} from 'prop-types'
import cx from 'classnames'

const SectionContent = ({ children, className, ...props }) => {
  return <>
    <div className={cx('ola_section-content', className)} {...props}>
      {children}
    </div>
  </>
}

SectionContent.defaultProps = {
  className: null
}

SectionContent.propTypes = {
  /** Extra className */
  className: PT.string,
  /** Childen nodes */
  children: PT.oneOfType([
    PT.string,
    PT.arrayOf(PT.node),
    PT.node
  ]).isRequired
}

export default SectionContent
