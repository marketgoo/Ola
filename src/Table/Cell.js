import React from 'react'
import {default as PT} from 'prop-types'
import cx from 'classnames'

const TableCell = ({ header, variant, highlight, className, children, ...props }) => {

  const Component = header ? 'th' : 'td'
  const backgroundColor = highlight ? 'var(--gray-xxlight)' : 'transparent'

  return (
    <Component className={cx('ola_tableCell', `is-${variant}`, className)} style={{ '--table-background': backgroundColor}} {...props}>
      {children}
    </Component>
  )
}

TableCell.defaultProps = {
  variant: 'left',
  header: false,
  backgroundColor: null,
  borderColor: false
}

TableCell.propTypes = {
  /** Extra className */
  className: PT.string,
  /** Content type */
  variant: PT.oneOf(['left', 'center', 'right', 'numeric', 'action', 'check', 'multiline']),
  /** Cell with background */
  highlight: PT.bool,
  /** Whether is a header */
  header: PT.bool,
  /** Childen nodes */
  children: PT.oneOfType([
    PT.string,
    PT.arrayOf(PT.node),
    PT.node
  ])
}

export default TableCell
