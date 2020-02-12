import React, { useEffect } from 'react'
import {default as PT} from 'prop-types'
import cx from 'classnames'
import Icon from '../Icon'
import ButtonIcon from '../ButtonIcon'

const Modal = ({ extraClass, children, open, onClose, ...props }) => {
    
  useEffect(() => {
    if (open){
      document.body.addEventListener('keydown', e => e.keyCode === 27 && onClose())
      return () => document.body.removeEventListener('keydown')
    }
  },[])

  if (open){
    return (
      <div className="ola_modal-overlay" onClick={onClose}>
        <dialog onClick={e => e.stopPropagation()} className={cx('ola_modal', extraClass)} open={open} {...props}>
          <ButtonIcon extraClass="ola_modal-close ola_buttonIcon" onClick={onClose}>
            <Icon name="close" />
          </ButtonIcon>
          {children}
        </dialog>
      </div>
    )
  }
  return null
}

Modal.propTypes = {
  /** Open or close Modal */
  open: PT.bool,
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
