import React from 'react'
import {default as PT} from 'prop-types'
import cx from 'classnames'

const sizes = {
  small: {
    className: null,
    size: 44,
    radio: 10
  },
  medium: {
    className: 'is-medium',
    size: 76,
    radio: 28
  },
  big: {
    className: 'is-big',
    size: 140,
    radio: 62
  }
}

const Spinner = ({size, extraClass, ...props }) => {
  const sizeProps = sizes[size];

  const styles = cx('ola_spinner', sizeProps.className, extraClass);

  return (
    <svg {...props} className={styles} width={sizeProps.size} height={sizeProps.size} viewBox={`0 0 ${sizeProps.size} ${sizeProps.size}`}>
      <circle r={sizeProps.radio} cx={sizeProps.size/2} cy={sizeProps.size/2}></circle>
    </svg>
  )
}

Spinner.defaultProps = {
  size: 'small',
  extraClass: null,
}

Spinner.propTypes = {
  /** Spinner sizes */
  size: PT.oneOf(['small', 'medium', 'big']),
  /** Extra className */
  extraClass: PT.string,
}

export { Spinner }
