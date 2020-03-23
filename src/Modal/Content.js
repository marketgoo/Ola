import React from 'react'
import {default as PT} from 'prop-types'
import cx from 'classnames'

const ModalContent = ({ className, variant, children, ...props }) => {
  return (
    <div className={cx('ola_modal-content', variant && `is-${variant}`, className)} {...props}>
      {children}
    </div>
  )
}

ModalContent.defaultProps = {
  variant: null
}

ModalContent.propTypes = {
  /** Extra className */
  className: PT.string,
  /** ModalContent variants */
  variant: PT.oneOf(['fullwidth']),
  /** Childen nodes */
  children: PT.oneOfType([
    PT.arrayOf(PT.node),
    PT.node
  ]).isRequired
}

export default ModalContent
