import React, { useState } from 'react'
import ButtonIcon from '../ButtonIcon'
import cx from 'classnames'
import {default as PT} from 'prop-types'

const Carousel = ({ children, className }) => {
  const [itemSelected, setItemSelected] = useState(0)

  const moveNext = (inc = 1) => {
    setItemSelected(itemSelected + inc)
  }

  const canMoveRight = itemSelected < children.length - 1
  const canMoveLeft = itemSelected > 0

  if (!children.length) return (
    <div className={cx('ola_carousel is-alone', className)}>
      {children}
    </div>
  )

  return (
    <div className={cx('ola_carousel', className)}>
      <div className="ola_carousel-container">
        <ButtonIcon
          onClick={() => moveNext(-1)}
          disabled={!canMoveLeft}
          icon="chevronLeft"
        />
        {children.map((item, index) => {
          return index === itemSelected ? React.cloneElement(item, {
            key: index
          }) : null
        } )}
        <ButtonIcon
          onClick={() => moveNext()}
          disabled={!canMoveRight}
          icon="chevronRight"
        />
      </div>
      <div className="ola_carousel-dots">
        {children.map((item, i) => (
          <div
            key={i}
            onClick={() => setItemSelected(i)}
            className={cx('ola_carousel-dots-item', i === itemSelected && 'is-selected')} />
        ))}
      </div>
    </div>
  )
}

Carousel.propTypes = {
  /** Extra className */
  className: PT.string,
  /** Childen nodes */
  children: PT.oneOfType([PT.arrayOf(PT.node), PT.node]).isRequired
}

export default Carousel
