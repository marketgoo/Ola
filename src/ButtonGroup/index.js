import React from 'react'
import {default as PT} from 'prop-types'
import cx from 'classnames'

const ButtonGroup = ({ reversed, extraClass, children, ...props }) => {
  return (
    <div className={cx('ola_buttonGroup', {'is-reversed': reversed}, extraClass)} {...props}>
      { children }
    </div>
  )
}

ButtonGroup.defaultProps = {
  reversed: false,
  extraClass: null
}

ButtonGroup.propTypes = {
  /** Reversed button order ( helper for tabulation problems ) */
  reversed: PT.bool,
  /** Extra className */
  extraClass: PT.string,
  /** Childen nodes */
  children: PT.oneOfType([
    PT.string,
    PT.arrayOf(PT.node),
    PT.node
  ]).isRequired
}

export { ButtonGroup }
