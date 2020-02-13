import React, { useEffect, useRef } from 'react'
import {default as PT} from 'prop-types'
import cx from 'classnames'
import dialogPolyfill from 'dialog-polyfill'
import useEventListener from '../hooks/useEventListener'
import Icon from '../Icon'
import ButtonIcon from '../ButtonIcon'

const Modal = ({ open, onClose, onOpen, children, ...props }) => {

  const modal = useRef(null)

  const closeModal = () => {
    modal.current.close()
    onClose()
  }

  const openModal = () => {
    modal.current.showModal()
    onOpen()
  }

  // We can't use useOutsideEvent hook. Dialog height and width is 100%
  const clickOutside = event => {
    const rect = modal.current.getBoundingClientRect()
    const isInDialog = (rect.top <= event.clientY && event.clientY <= rect.top + rect.height
      && rect.left <= event.clientX && event.clientX <= rect.left + rect.width)
    if(!isInDialog) { closeModal() }
  }

  useEffect(() => {
    if(modal.current) dialogPolyfill.registerDialog(modal.current)
    if (open && modal.current && (modal.current.open === false) ) { openModal() }
    if(!open && modal.current && (modal.current.open === true)) { closeModal() }
  })

  useEventListener(modal.current, 'close', closeModal)

  return (
    <dialog className={cx('ola_modal')} {...props} ref={modal} onClick={clickOutside}>
      {children}
      <ButtonIcon type="button" onClick={closeModal} extraClass={'ola_modal-close'}>
        <Icon name="close" />
      </ButtonIcon>
    </dialog>
  )

}

Modal.defaultProps = {
  open: false,
  onOpen: () => {},
  onClose: () => {}
}

Modal.propTypes = {
  /** open */
  open: PT.bool,
  /** Close event */
  onClose: PT.func,
  /** Open event */
  onOpen: PT.func,
  /** Childen nodes */
  children: PT.oneOfType([
    PT.string,
    PT.arrayOf(PT.node),
    PT.node
  ]).isRequired
}

export default Modal
