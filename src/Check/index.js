import React from 'react'
import cx from 'classnames'
import {default as PT} from 'prop-types'

const Check = ({ type, children, extraClass, ...props }) => {
  return (
    <label className={cx('ola_check', extraClass)}>
      <input type={type} className="ola_check-input" {...props} />
      <div className="ola_check-label">
        <div className="ola_check-label-content">{ children }</div>
      </div>
    </label>
  )
}

Check.defaultProps = {
  type: 'checkbox',
  extraClass: null,
}

Check.propTypes = {
  /** Check Type */
  type: PT.oneOf(['checkbox', 'radio']),
  /** Extra className */
  extraClass: PT.string,
  /** Childen nodes */
  children: PT.oneOfType([
    PT.string,
    PT.arrayOf(PT.node),
    PT.node
  ]).isRequired
}

export default Check
