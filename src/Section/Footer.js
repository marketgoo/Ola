import React from 'react'
import {default as PT} from 'prop-types'
import cx from 'classnames'

const SectionFooter = ({ children, className, ...props }) => (
  <footer className={cx('ola_section-footer', className)} {...props}>
    {children}
  </footer>
)

SectionFooter.defaultProps = {
  className: null
}

SectionFooter.propTypes = {
  /** Extra className */
  className: PT.string,
  /** Childen nodes */
  children: PT.oneOfType([
    PT.arrayOf(PT.node),
    PT.node
  ]).isRequired
}

export default SectionFooter
