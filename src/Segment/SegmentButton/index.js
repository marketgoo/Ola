import React from 'react'
import {default as PT} from 'prop-types'
import cx from 'classnames'
import { getElementType } from '../../utils'

const SegmentButton = ({ className, onClick, as, selected, children, ...props }) => {
  const styles = cx('ola_segment-button', { 'is-selected': selected }, className)
  const ElementType = getElementType(SegmentButton, { as, ...props })
  delete props.as

  return (
    <ElementType className={styles} onClick={onClick} {...props}>
      { children }
    </ElementType>
  )
}

SegmentButton.defaultProps = {
  className: null,
  as: 'button',
  onClick: () => {},
  selected: false
}

SegmentButton.propTypes = {
  /** Extra className */
  className: PT.string,
  /** Children nodes */
  children: PT.oneOfType([
    PT.string,
    PT.arrayOf(PT.node),
    PT.node
  ]).isRequired,
  /** onClick callback function */
  onClick: PT.func,
  /** Render component as button or anchor */
  as: PT.oneOf(['button', 'a']),
  /** Indicates if button is selected or not */
  selected: PT.bool,
}

export default SegmentButton
