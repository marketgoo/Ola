import React, { useEffect, useRef } from 'react'
import {default as PT} from 'prop-types'
import dialogPolyfill from 'dialog-polyfill'
import useEventListener from '../hooks/useEventListener'
import Icon from '../Icon'
import ButtonIcon from '../ButtonIcon'

const Modal = ({ open, onClose, onOpen, children, ...props }) => {

  const modal = useRef(null)

  // We can't use useOutsideEvent hook. Dialog height and width is 100%
  const clickOutside = event => {
    const rect = modal.current.getBoundingClientRect()
    const isInDialog = (rect.top <= event.clientY && event.clientY <= rect.top + rect.height
      && rect.left <= event.clientX && event.clientX <= rect.left + rect.width)
    if(!isInDialog) { onClose() }
  }

  useEffect(() => { dialogPolyfill.registerDialog(modal.current) }, [])
  useEventListener(modal.current, 'close', onClose)

  useEffect(() => {
    if(modal.current) {
      if(open && (modal.current.open === false)) { modal.current.showModal(); onOpen() }
      if(!open && (modal.current.open === true)) { modal.current.close() }
    }
  })

  return (
    <dialog className='ola_modal' {...props} ref={modal} onClick={clickOutside}>
      { open &&
        <>
          {children}
          <ButtonIcon type="button" onClick={onClose} extraClass={'ola_modal-close'}>
            <Icon name="close" />
          </ButtonIcon>
        </>
      }
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
