import React from 'react'
import { default as PT } from 'prop-types'
import cx from 'classnames'

const TagsInput = ({ variant, className, size, children }) => (
  <span
    className={cx(
      'ola_tagInput',
      variant && `is-${variant}`,
      `is-${size}`,
      className
    )}
  >
    {children}
  </span>
)

TagsInput.defaultProps = {
  variant: null,
  size: 'small',
}

TagsInput.propTypes = {
  /** TagsInput variants */
  variant: PT.oneOf([
    'invert',
    'error',
    'pro',
    'success',
    'warning',
    'info',
    'chart-0',
    'chart-1',
    'chart-2',
    'chart-3',
    'chart-4',
  ]),
  /** TagsInput sizes */
  size: PT.oneOf(['small', 'medium', 'big']),
  /** Extra className */
  className: PT.string,
  /** Childen nodes */
  children: PT.oneOfType([PT.string, PT.arrayOf(PT.node), PT.node]).isRequired,
}

export default TagsInput
