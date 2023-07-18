import React from 'react'
import {default as PT} from 'prop-types'
import cx from 'classnames'

const TableCell = ({ children, header, nowrap }) => {
  const styles = {}

  if (nowrap) {
    styles.whiteSpace = 'nowrap'
  }

  return (
    <div
      className={cx('ola_table-cell', { 'is-header': header })}
      style={styles}
      role="cell">
      {children}
    </div>
  )
}

TableCell.defaultProps = {
  header: false,
  nowrap: false,
}

TableCell.propTypes = {
  header: PT.bool,
  nowrap: PT.bool,
  children: PT.oneOfType([
    PT.string,
    PT.arrayOf(PT.node),
    PT.node
  ]),
}

export default TableCell