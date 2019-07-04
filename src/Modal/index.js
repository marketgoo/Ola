import React from 'react'
import {default as PT} from 'prop-types'
import cx from 'classnames'
import { Icon } from '../Icon'

const Modal = ({ extraClass, children, onClose, ...props }) => {
  return (
    <section className={cx('ola_modal', extraClass)} {...props}>
      <button className="ola_modal-close ola_buttonIcon" onClick={() => onClose()}>
        <Icon name="close" />
      </button>
      {children}
    </section>
  )
}

Modal.propTypes = {
  /** On Close function */
  onClose: PT.func,
  /** Extra className */
  extraClass: PT.string,
  /** Childen nodes */
  children: PT.oneOfType([
    PT.arrayOf(PT.node),
    PT.node
  ]).isRequired
}

export { Modal }
