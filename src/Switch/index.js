import React from 'react'
import cx from 'classnames'
import {default as PT} from 'prop-types'

const Switch = ({ children, className, ...props }) => {
  return (
    <label className={cx('ola_switch', className)}>
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
  className: PT.string,
  /** Childen nodes */
  children: PT.oneOfType([
    PT.string,
    PT.arrayOf(PT.node),
    PT.node
  ])
}

export default Switch
