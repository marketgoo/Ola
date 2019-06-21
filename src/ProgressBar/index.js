import React from 'react'
import {default as PT} from 'prop-types'
import cx from 'classnames'
import { getElementType } from '../utils'

const ProgressBar = ({ extraClass, ...props }) => {
  const ElementType = getElementType(ProgressBar, {...props})
  return (
    <ElementType className={cx('ola_progressBar', extraClass)} {...props} />
  )
}

ProgressBar.defaultProps = {
  as: 'progress',
  extraClass: null
}

ProgressBar.propTypes = {
  as: PT.oneOf(['progress', 'meter']),
  /** Extra className */
  extraClass: PT.string
}

export { ProgressBar }
