import React from 'react'
import {default as PT} from 'prop-types'
import cx from 'classnames'

const ButtonGroup = ({ variant, extraClass, children, ...props }) => {
  const styles = cx(
    'ola_buttonGroup',
    {[`is-${variant}`]: variant },
    extraClass
  )
  return (
    <div className={styles} {...props}>
      { children }
    </div>
  )
}

ButtonGroup.defaultProps = {
  variant: null,
  extraClass: null
}

ButtonGroup.propTypes = {
  /** Variants: Center or Reversed button order ( helper for tabulation problems ) */
  variant: PT.oneOf(['reversed', 'center']),
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
