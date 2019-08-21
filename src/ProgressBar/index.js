import React from 'react'
import {default as PT} from 'prop-types'
import cx from 'classnames'
import { getElementType } from '../utils'

const ProgressBarDescription = ({ description, htmlDescription=false }) => {
  return htmlDescription ?
    <p dangerouslySetInnerHTML={{__html: description}} /> :
    <p>{description}</p>
}

const ProgressBar = ({ extraClass, description, descriptionPosition, htmlDescription, ...props }) => {
  const ElementType = getElementType(ProgressBar, {...props})
  return (
    <div className={cx('ola_progressBar', `is-description-${descriptionPosition}`, extraClass)}>
      { description && <ProgressBarDescription description={description} htmlDescription={htmlDescription} /> }
      <ElementType {...props} />
    </div>
  )
}

ProgressBar.defaultProps = {
  as: 'progress',
  extraClass: null,
  description: null,
  descriptionPosition: 'top',
  htmlDescription: false
}

ProgressBar.propTypes = {
  as: PT.oneOf(['progress', 'meter']),
  /** Extra className */
  extraClass: PT.string,
  /** Description */
  description: PT.string,
  /** Description Position */
  descriptionPosition: PT.oneOf(['top', 'right']),
  /** Description support HTML tags */
  htmlDescription: PT.bool
}

export { ProgressBar }
