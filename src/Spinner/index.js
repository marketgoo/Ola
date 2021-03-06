import React from 'react'
import {default as PT} from 'prop-types'
import cx from 'classnames'

const sizes = {
  small: {
    className: null,
    size: 28,
    radio: 12
  },
  medium: {
    className: 'is-medium',
    size: 76,
    radio: 34
  },
  big: {
    className: 'is-big',
    size: 140,
    radio: 62
  }
}

const Spinner = ({size, className, ...props }) => {
  const sizeProps = sizes[size]
  const styles = cx('ola_spinner', sizeProps.className, className)
  return (
    <svg {...props} className={styles} width={sizeProps.size} height={sizeProps.size} viewBox={`0 0 ${sizeProps.size} ${sizeProps.size}`}>
      <circle r={sizeProps.radio} cx={sizeProps.size/2} cy={sizeProps.size/2}></circle>
    </svg>
  )
}

Spinner.defaultProps = {
  size: 'small',
  className: null,
}

Spinner.propTypes = {
  /** Spinner sizes */
  size: PT.oneOf(['small', 'medium', 'big']),
  /** Extra className */
  className: PT.string,
}

export default Spinner
