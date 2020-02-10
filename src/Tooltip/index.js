import React, { useState, useRef } from 'react'
import {default as PT} from 'prop-types'
import cx from 'classnames'
import useOutsideEvent from '../hooks/useOutsideEvent'

const getClassPosition = ref => {

  const win_width = window.innerWidth
  const win_height = window.innerHeight

  const { top, left, width, height } = ref.current.getClientRects()[0]
  const el_left = left + (width / 2)
  const el_top = top + (height / 2)

  const heightPosition = ((win_height * 0.5) < el_top ) ? 'top' : 'bottom'
  const widthPosition = ((win_width * 0.33) > el_left) ? 'right' : ((win_width * 0.66) > el_left) ? 'center' : 'left'

  return `${heightPosition}${widthPosition}`
}

const Tooltip = ({ trigger, children }) => {

  const [position, setPosition] = useState(null)
  const tooltipRef = useRef(null)

  useOutsideEvent(tooltipRef, ref => {
    ref.current.open = false
    setPosition(null)
  })

  const toggle = () => tooltipRef.current.open ? setPosition( getClassPosition(tooltipRef) ) : setPosition(null)

  return (
    <details className={cx('ola_tooltip')} onToggle={toggle} ref={tooltipRef}>
      <summary className="ola_tooltip-trigger">{trigger}</summary>
      <div className={cx('ola_tooltip-content', position && `is-${position}`)}>{children}</div>
    </details>
  )
}

Tooltip.propTypes = {
  /** Trigger nodes */
  trigger: PT.oneOfType([
    PT.string,
    PT.arrayOf(PT.node),
    PT.node
  ]).isRequired,
  /** Childen nodes */
  children: PT.oneOfType([
    PT.string,
    PT.arrayOf(PT.node),
    PT.node
  ]).isRequired
}

export default Tooltip
