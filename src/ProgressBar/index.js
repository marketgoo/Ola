import React from 'react'
import {default as PT} from 'prop-types'
import cx from 'classnames'
import { getElementType } from '../utils'

const ProgressBar = ({ className, children, descriptionPosition, ...props }) => {
  const ElementType = getElementType(ProgressBar, {...props})
  return (
    <div className={cx('ola_progressBar', `is-description-${descriptionPosition}`, className)}>
      { children && <p className="ola_progressBar-description">{children}</p> }
      <ElementType {...props} />
    </div>
  )
}

ProgressBar.defaultProps = {
  as: 'progress',
  className: null,
  children: null,
  descriptionPosition: 'top'
}

ProgressBar.propTypes = {
  as: PT.oneOf(['progress', 'meter']),
  /** Extra className */
  className: PT.string,
  /** Description Position */
  descriptionPosition: PT.oneOf(['top', 'right']),
  /** Childen nodes */
  children: PT.oneOfType([
    PT.string,
    PT.arrayOf(PT.node),
    PT.node
  ])
}

export default ProgressBar
