import React, { useEffect, useRef } from 'react'
import cx from 'classnames'
import {default as PT} from 'prop-types'
import dialogPolyfill from 'dialog-polyfill'
import useEventListener from '../hooks/useEventListener'
import Icon from '../Icon'
import ButtonIcon from '../ButtonIcon'

const scrollBarWidth = getScrollbarWidth()

const Modal = ({ open, closable, onClose, onOpen, variant, className, children, ...props }) => {

  const modal = useRef(null)
  const scrollingElement = document.scrollingElement

  // We can't use useOutsideEvent hook. Dialog height and width is 100%
  const clickOutside = event => {
    if(closable && modal && modal.current === event.target) {
      const rect = modal.current.getBoundingClientRect()
      const isInDialog = (rect.top <= event.clientY && event.clientY <= rect.top + rect.height
        && rect.left <= event.clientX && event.clientX <= rect.left + rect.width)
      if(!isInDialog) {
        modal.current.close()
      }
    }
  }

  useEventListener(modal, 'cancel', event => { if(!closable) event.preventDefault() })
  useEventListener(modal, 'close', () => {
    onClose()
    releaseScroll(scrollingElement)
  })
  useEffect(() => { 
    dialogPolyfill.registerDialog(modal.current)
    return () => {
      if( scrollingElement.style.overflow !== null ) releaseScroll(scrollingElement)
    }
  }, [])
  useEffect(() => {
    if(modal.current && open && !modal.current.open) {
      onOpen()
      blockScroll(scrollingElement)
      modal.current.showModal()
    }
  })

  return (
    <dialog className={cx('ola_modal', variant && `is-${variant}`, {'is-closable': closable}, className)} {...props} ref={modal} onClick={clickOutside}>
      { open &&
        <>
          <div className="ola_modal-container">{children}</div>
          { closable &&
          <ButtonIcon icon="close" onClick={() => modal.current.close()} className={'ola_modal-close'} />
          }
        </>
      }
    </dialog>
  )

}

Modal.defaultProps = {
  open: false,
  variant: null,
  onOpen: () => {},
  onClose: () => {},
  closable: true
}

Modal.propTypes = {
  /** Extra className */
  className: PT.string,
  /** open */
  open: PT.bool,
  /** closable */
  closable: PT.bool,
  /** Close event */
  onClose: PT.func,
  /** Open event */
  onOpen: PT.func,
  /** Modal variants */
  variant: PT.oneOf(['center', 'narrow']),
  /** Childen nodes */
  children: PT.oneOfType([
    PT.string,
    PT.arrayOf(PT.node),
    PT.node
  ]).isRequired
}

export default Modal

function getScrollbarWidth() {
  const outer = document.createElement('div')
  outer.style.visibility = 'hidden'
  outer.style.overflow = 'scroll'
  const inner = document.createElement('div')
  outer.appendChild(inner)

  document.body.appendChild(outer)
  const scrollbarWidth = (outer.offsetWidth - inner.offsetWidth)
  outer.parentNode.removeChild(outer)

  return scrollbarWidth
}

function blockScroll(element) {
  if (element.scrollHeight > element.clientHeight) {
    element.style.overflow = 'hidden'
    element.style.paddingRight = `${scrollBarWidth}px`
  }
}

function releaseScroll(element) {
  element.style.overflow = null
  element.style.paddingRight = null
}
