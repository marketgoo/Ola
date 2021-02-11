import React from 'react'
import {default as PT} from 'prop-types'
import cx from 'classnames'

const Thumbnail = ({ className, url, borderColor }) => {
  return (
    <div className={ cx( 'ola_thumbnail', className )} style={{'--color': borderColor}}>
      <img className={'ola_thumbnail-image'} src={url} />
    </div>
  )
}

export default Thumbnail

Thumbnail.defaultProps = {
  className: null,
  status: 'loaded',
  borderColor: null
}

Thumbnail.propTypes = {
  /** Extra className */
  className: PT.string,
  /** Image url */
  url: PT.string,
  /** Color of the column */
  borderColor: PT.string,
  /** Url status */
  status: PT.oneOf(['loaded', 'loading', 'empty']),
}