import React from 'react'
import {default as PT} from 'prop-types'
import cx from 'classnames'

const SectionSubheader = ({ title, className, children, ...props }) => {
  return (
    <div className={cx('ola_section-subheader', className)} {...props}>
      <h2 className="ola_section-subtitle">{title}</h2>
      { children && <div className="ola_section-intro">{ children }</div> }
    </div>
  )
}

SectionSubheader.defaultProps = {
  className: null,
  title: null,
  children: null
}

SectionSubheader.propTypes = {
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

export default SectionSubheader
