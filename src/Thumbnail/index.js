import React, { useRef } from 'react'
import { default as PT } from 'prop-types'
import cx from 'classnames'

const Thumbnail = ({ className, url, errorImage, borderColor, children }) => {
  const imgError = useRef(null)

  return (
    <div
      className={cx('ola_thumbnail', className)}
      style={{ '--color': borderColor }}
    >
      <img
        className={'ola_thumbnail-image'}
        src={url}
        onError={() => errorImage ? imgError.current.src = errorImage : null }
        ref={imgError}
      />
      {children}
    </div>
  )
}

export default Thumbnail

Thumbnail.defaultProps = {
  className: null,
  url: null,
  borderColor: null,
}

Thumbnail.propTypes = {
  /** Extra className */
  className: PT.string,
  /** Image url */
  url: PT.string,
  /** Error image */
  errorImage: PT.string,
  /** Color of the column */
  borderColor: PT.string,
  /** Childen nodes */
  children: PT.oneOfType([PT.string, PT.arrayOf(PT.node), PT.node]),
}
