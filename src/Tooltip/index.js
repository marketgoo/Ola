import cx from 'classnames'
import { default as PT } from 'prop-types'
import React, { useEffect, useRef, useState } from 'react'
import useOutsideEvent from '../hooks/useOutsideEvent'

const Tooltip = ({
  children,
  className,
  hover,
  onClose,
  onOpen,
  trigger,
  variant,
  open
}) => {
  const [position, setPosition] = useState(null)
  const tooltipRef = useRef(null)

  useOutsideEvent(tooltipRef, (ref) => {
    ref.current.open = false
    setPosition(null)
  })

  const handleEnterLeave = (event) => {
    tooltipRef.current.open = event.type === 'mouseenter'
  }

  useEffect(() => {
    if (tooltipRef && tooltipRef.current && hover) {
      tooltipRef.current.addEventListener('mouseenter', handleEnterLeave)
      tooltipRef.current.addEventListener('mouseleave', handleEnterLeave)
    }
  }, [tooltipRef, hover])

  const toggle = () => {
    if (tooltipRef.current.open) {
      setPosition(getClassPosition(tooltipRef.current))
      onOpen()
    } else {
      setPosition(null)
      onClose()
    }
  }

  return (
    <details
      className={cx('ola_tooltip', className, { [`is-${variant}`]: variant })}
      onToggle={toggle}
      ref={tooltipRef}
      open={open}
    >
      <summary className="ola_tooltip-trigger">{trigger}</summary>
      <div className={cx('ola_tooltip-content', position && `is-${position}`)}>
        {children}
      </div>
    </details>
  )
}

Tooltip.defaultProps = {
  variant: null,
  className: null,
  hover: false,
  onOpen: () => false,
  onClose: () => false,
  open: false
}

Tooltip.propTypes = {
  /** Tooltip variants */
  variant: PT.oneOf(['wide', 'narrow']),
  /** Trigger nodes */
  trigger: PT.oneOfType([PT.string, PT.arrayOf(PT.node), PT.node]),
  /** Hover property */
  hover: PT.bool,
  /** Close event */
  onClose: PT.func,
  /** Open event */
  onOpen: PT.func,
  /** Childen nodes */
  children: PT.oneOfType([PT.string, PT.arrayOf(PT.node), PT.node]).isRequired,
  /** Extra className */
  className: PT.string,
  //** prop to open or close the tooltip */
  open: PT.bool
}

export default Tooltip

function isOverflowVisible(element) {
  const value = window.getComputedStyle(element).overflowY

  return value.indexOf('visible') !== -1
}

function getNotOverflowVisibleParent(element) {
  return !element || element === document.body
    ? document.body
    : isOverflowVisible(element)
      ? getNotOverflowVisibleParent(element.parentNode)
      : element
}

function getClassPosition(element) {
  const {
    top,
    left,
    width,
    height,
    parentWidth,
    parentHeight,
  } = getElementPosition(element)

  const el_left = left + width / 2
  const el_top = top + height / 2
  const extraMargin = 40

  const heightPosition = parentHeight * 0.5 < el_top ? 'top' : 'bottom'
  const widthPosition =
    parentWidth * 0.33 > el_left
      ? 'right'
      : parentWidth * 0.66 > el_left
        ? 'center'
        : 'left'
  const extraPosition =
    left < extraMargin || left + width > parentWidth - extraMargin
      ? '-extra'
      : ''

  return `${heightPosition}${widthPosition}${extraPosition}`
}

function getElementPosition(element) {
  const { top, left, width, height } = element.getClientRects()[0]
  const parentWidth = window.innerWidth
  const parentHeight = window.innerHeight

  const parent = getNotOverflowVisibleParent(element)

  if (!parent || parent === document.body) {
    return { top, left, width, height, parentWidth, parentHeight }
  }

  const parentRect = parent.getClientRects()[0]

  return {
    top: top - parentRect.top,
    left: left - parentRect.left,
    width,
    height,
    parentWidth: parentRect.width,
    parentHeight: parentRect.height,
  }
}
