import React from 'react'
import {default as PT} from 'prop-types'
import cx from 'classnames'

const TableCell = ({ header, variant, backgroundColor, borderColor, className, children, ...props }) => {
  const Component = header ? 'th' : 'td'
  return (
    <Component className={cx('ola_tableCell', `is-${variant}`, `has-${backgroundColor}`, className)} style={{ '--table-background': backgroundColor, '--borderColor': borderColor }} {...props}>
      {children}
    </Component>
  )
}

TableCell.defaultProps = {
  variant: 'left',
  header: false
}

TableCell.propTypes = {
  /** Extra className */
  className: PT.string,
  /** Content type */
  variant: PT.oneOf(['left', 'center', 'right', 'numeric', 'action', 'check', 'multiline']),
  /** Cell with background */
  backgroundColor: PT.string,
  /** Cell with borderColor bottom */
  borderColor: PT.string,
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
