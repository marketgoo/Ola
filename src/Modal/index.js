import React, { useEffect, useRef } from 'react'
import cx from 'classnames'
import {default as PT} from 'prop-types'
import dialogPolyfill from 'dialog-polyfill'
import useEventListener from '../hooks/useEventListener'
import Icon from '../Icon'
import ButtonIcon from '../ButtonIcon'

const Modal = ({ open, onClose, onOpen, variant, extraClass, children, ...props }) => {

  const modal = useRef(null)

  // We can't use useOutsideEvent hook. Dialog height and width is 100%
  const clickOutside = event => {
    const rect = modal.current.getBoundingClientRect()
    const isInDialog = (rect.top <= event.clientY && event.clientY <= rect.top + rect.height
      && rect.left <= event.clientX && event.clientX <= rect.left + rect.width)
    if(!isInDialog) {
      modal.current.close()
    }
  }

  useEffect(() => { dialogPolyfill.registerDialog(modal.current) }, [])
  useEventListener(modal.current, 'close', onClose)

  useEffect(() => {
    if(modal.current && open && !modal.current.open) {
      onOpen()
      modal.current.showModal()
    }
  })

  return (
    <dialog className={cx('ola_modal', variant && `is-${variant}`, extraClass)} {...props} ref={modal} onClick={clickOutside}>
      { open &&
        <>
          {children}
          <ButtonIcon type="button" onClick={() => modal.current.close()} extraClass={'ola_modal-close'}>
            <Icon name="close" />
          </ButtonIcon>
        </>
      }
    </dialog>
  )

}

Modal.defaultProps = {
  open: false,
  variant: null,
  onOpen: () => {},
  onClose: () => {}
}

Modal.propTypes = {
  /** Extra className */
  extraClass: PT.string,
  /** open */
  open: PT.bool,
  /** Close event */
  onClose: PT.func,
  /** Open event */
  onOpen: PT.func,
  /** Modal variants */
  variant: PT.oneOf(['center']),
  /** Childen nodes */
  children: PT.oneOfType([
    PT.string,
    PT.arrayOf(PT.node),
    PT.node
  ]).isRequired
}

export default Modal
