import React from 'react'
import {default as PT} from 'prop-types'
import cx from 'classnames'

const Table = ({ extraClass, children }) =>
  <table className={cx('ola_table', extraClass)}>{children}</table>

Table.propTypes = {
  /** Extra className */
  extraClass: PT.string,
  /** Childen nodes */
  children: PT.oneOfType([
    PT.string,
    PT.arrayOf(PT.node),
    PT.node
  ]).isRequired
}

export { Table }
