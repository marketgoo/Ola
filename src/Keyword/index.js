import React from 'react'
import { default as PT } from 'prop-types'
import cx from 'classnames'

const Keyword = ({ className, children, button }) =>
  <strong className={cx('ola_keyword', className)}>
    <span className="ola_keyword-text">{children}</span>
    {
      button && <span className="ola_keyword-button">{ button }</span>
    }
  </strong>


Keyword.defaultProps = {
  button: null
}

Keyword.propTypes = {
  /** Extra className */
  className: PT.string,
  /** Childen nodes */
  children: PT.oneOfType([
    PT.string,
    PT.arrayOf(PT.node),
    PT.node
  ]).isRequired,
  /** Button */
  button: PT.node
}

export default Keyword
