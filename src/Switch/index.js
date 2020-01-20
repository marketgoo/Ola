import React from 'react'
import cx from 'classnames'
import {default as PT} from 'prop-types'

const Switch = ({ children, extraClass, ...props }) => {
  return (
    <label className={cx('ola_switch', extraClass)}>
      <input type="checkbox" className="ola_switch-input" {...props} />
      <div className="ola_switch-label">
        { children && <div className="ola_switch-label-content">{ children }</div> }
      </div>
    </label>
  )
}

Switch.defaultProps = {
  label: null
}

Switch.propTypes = {
  /** Extra className */
  extraClass: PT.string,
  /** Childen nodes */
  children: PT.oneOfType([
    PT.string,
    PT.arrayOf(PT.node),
    PT.node
  ])
}

export default Switch
