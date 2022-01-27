import React, {forwardRef} from 'react'
import cx from 'classnames'
import {default as PT} from 'prop-types'

const Check = forwardRef(({ type, children, className, variant, ...props }, ref) => {
  return (
    <label className={cx('ola_check', variant && `is-${variant}`, className)}>
      <input type={type} ref={ref} className="ola_check-input" {...props} />
      <div className="ola_check-label">
        { children && <div className="ola_check-label-content">{ children }</div> }
      </div>
    </label>
  )
})

Check.defaultProps = {
  variant: null,
  type: 'checkbox',
  className: null,
}

Check.displayName = 'Check'

Check.propTypes = {
  /** Check Type */
  type: PT.oneOf(['checkbox', 'radio']),
  /** CheckArea variants */
  variant: PT.oneOf(['area', 'option']),
  /** Extra className */
  className: PT.string,
  /** Childen nodes */
  children: PT.oneOfType([
    PT.string,
    PT.arrayOf(PT.node),
    PT.node
  ])
}

export default Check
