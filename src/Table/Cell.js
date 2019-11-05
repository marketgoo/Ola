import React from 'react'
import {default as PT} from 'prop-types'
import cx from 'classnames'

const TableCell = ({ variant, align, numeric, extraClass, children, ...props }) => {
  const Component = (variant === 'header') ? 'th' : 'td'
  return (
    <Component className={cx(numeric && 'ola-numeric', align && align !== 'left' && `ola-${align}`, extraClass)} {...props}>
      {children}
    </Component>
  )
}

TableCell.defaultProps = {
  align: 'left',
  numeric: false,
  variant: 'body'
}

TableCell.propTypes = {
  /** Extra className */
  extraClass: PT.string,
  /** Content align */
  align: PT.oneOf(['left', 'center', 'right']),
  /** Is numeric content */
  numeric: PT.bool,
  /** Variant */
  variant: PT.oneOf(['header', 'body']),
  /** Childen nodes */
  children: PT.oneOfType([
    PT.string,
    PT.arrayOf(PT.node),
    PT.node
  ])
}

export { TableCell }
