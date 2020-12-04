import React from 'react'
import {default as PT} from 'prop-types'
import cx from 'classnames'

const Label = ({ value, children, className }) => {
  const styles = cx('ola_chartLine-label', className)
  return (
    <div className={styles} style={{ '--value': value }}>
      { children }
    </div>
  )
}

Label.defaultProps = {
  value: 0,
  className: null
}

Label.propTypes = {
  /** Value between 0 and 1 */
  value: PT.number,
  /** Extra className */
  className: PT.string,
  /** Childen nodes */
  children: PT.oneOfType([
    PT.arrayOf(PT.node),
    PT.node
  ])
}

export default Label