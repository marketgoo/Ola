import React from 'react'
import {default as PT} from 'prop-types'
import cx from 'classnames'

const Section = ({ className, children }) => {
  return (
    <section className={cx('ola_section', className)}>
      {children}
    </section>
  )
}

Section.propTypes = {
  /** Extra className */
  className: PT.string,
  /** Childen nodes */
  children: PT.oneOfType([
    PT.arrayOf(PT.node),
    PT.node
  ]).isRequired
}

export default Section
