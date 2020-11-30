import React from 'react'
import {default as PT} from 'prop-types'
import cx from 'classnames'

const SectionHeader = ({ title, className, children, ...props }) => {
  return (
    <header className={cx('ola_section-header', className)} {...props}>
      <h1 className="ola_section-title">{title}</h1>
      { children && <div className="ola_section-intro">{ children }</div> }
    </header>
  )
}

SectionHeader.defaultProps = {
  className: null,
  title: null,
  children: null
}

SectionHeader.propTypes = {
  /** Extra className */
  className: PT.string,
  /** Title of header */
  title: PT.oneOfType([
    PT.string,
    PT.arrayOf(PT.node),
    PT.node
  ]).isRequired,
  /** Childen nodes */
  children: PT.oneOfType([
    PT.string,
    PT.arrayOf(PT.node),
    PT.node
  ])
}

export default SectionHeader
