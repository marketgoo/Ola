import React from 'react'
import {default as PT} from 'prop-types'
import cx from 'classnames'

const Table = ({ caption, sticky, responsive, className, children }) =>
  <div className={cx('ola_table-container', responsive && 'is-responsive')}>
    <table className={cx('ola_table', sticky && 'is-sticky', className)}>
      { caption && <caption>{ caption }</caption> }
      {children}
    </table>
  </div>

Table.defaultProps = {
  caption: null,
  sticky: false,
  responsive: false
}

Table.propTypes = {
  /** caption */
  caption: PT.oneOfType([
    PT.string,
    PT.arrayOf(PT.node),
    PT.node
  ]),
  /** Table header is sticky */
  sticky: PT.bool,
  /** Table responsive */
  responsive: PT.bool,
  /** Extra className */
  className: PT.string,
  /** Childen nodes */
  children: PT.oneOfType([
    PT.string,
    PT.arrayOf(PT.node),
    PT.node
  ]).isRequired
}

export default Table
