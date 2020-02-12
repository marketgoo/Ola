import React, { useEffect } from 'react'
import {default as PT} from 'prop-types'
import cx from 'classnames'
import Icon from '../Icon'

const Overlay = ({ children, open, ...props }) => open ?
  <div className="ola_modal-overlay" {...props}>
    {children}
  </div> : null

const Modal = ({ extraClass, children, closeWhenClickOut = true, closeWhenPressEsc = true, onClose, ...props }) => {
    
  useEffect(() => closeWhenPressEsc && document.body.addEventListener('keydown', e => e.keyCode === 27 && onClose()), [])

  return (
    <Overlay onClick={closeWhenClickOut && onClose} {...props}>
      <dialog onClick={e => e.stopPropagation()} className={cx('ola_modal', extraClass)} {...props}>
        <button className="ola_modal-close ola_buttonIcon" onClick={onClose}>
          <Icon name="close" />
        </button>
        {children}
      </dialog>
    </Overlay>
  )
}

Modal.propTypes = {
  /** Open or close Modal */
  open: PT.bool,
  /** Close Modal when click out. Default is true */
  closeWhenClickOut: PT.bool,
  /** Close Modal when press ESC. Default is true */
  closeWhenPressEsc: PT.bool,
  /** On Close function */
  onClose: PT.func,
  /** Extra className */
  extraClass: PT.string,
  /** Childen nodes */
  children: PT.oneOfType([
    PT.string,
    PT.arrayOf(PT.node),
    PT.node
  ]).isRequired
}

export default Modal
