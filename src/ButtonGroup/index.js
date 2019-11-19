import React from 'react'
import {default as PT} from 'prop-types'
import cx from 'classnames'

const ButtonGroup = ({ variant, extraClass, children, ...props }) => {
  const styles = cx(
    'ola_buttonGroup',
    { 'is-center': variant && (variant == 'center' || variant == 'reversed-center') },
    { 'is-reversed': variant && (variant == 'reversed' || variant == 'reversed-center') },
    extraClass
  )
  return (
    <div className={styles} {...props}>
      { children }
    </div>
  )
}

ButtonGroup.defaultProps = {
  variant: 'default',
  extraClass: null
}

ButtonGroup.propTypes = {
  /** Variants: Center or Reversed button order ( helper for tabulation problems ) */
  variant: PT.oneOf(['default', 'reversed', 'center', 'reversed-center']),
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
