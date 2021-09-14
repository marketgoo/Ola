import React, { useState } from 'react'
import Icon from '../Icon'
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
    <div className={cx('ola_carousel', className)}>
      <div className="ola_carousel-container">
        {children}
      </div>
    </div>
  )

  return (
    <div className={cx('ola_carousel', className)}>
      <div className="ola_carousel-container">
        <ButtonIcon
          onClick={() => moveNext(-1)}
          disabled={!canMoveLeft}
          variant={canMoveLeft ? 'primary' : 'secondary'}
        >
          <Icon name="chevronLeft" size="big" />
        </ButtonIcon>
        {children.map((item, index) => {
          return index === itemSelected ? React.cloneElement(item, {
            key: index
          }) : null
        } )}
        <ButtonIcon
          onClick={() => moveNext()}
          disabled={!canMoveRight}
          variant={canMoveRight ? 'primary' : 'secondary'}
        >
          <Icon name="chevronRight" size="big" />
        </ButtonIcon>
      </div>
      <div className="ola_carousel-dots">
        {children.map((item, i) => (
          <div
            key={i}
            onClick={() => setItemSelected(i)}
            className={cx('ola_carousel-dots-item', i === itemSelected && 'selected')} />
        ))}
      </div>
    </div>
  )
}

Carousel.propTypes = {
  /** Extra className */
  className: PT.string,
  /** Childen nodes */
  children: PT.arrayOf(PT.node)
}

export default Carousel
