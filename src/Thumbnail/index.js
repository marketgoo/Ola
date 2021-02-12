import React from 'react'
import {default as PT} from 'prop-types'
import cx from 'classnames'

const Thumbnail = ({ className, url, borderColor, children }) => {
  return (
    <div className={ cx( 'ola_thumbnail', className )} style={{'--color': borderColor}}>
      {
        url
          ? <img className={'ola_thumbnail-image'} src={url} />
          : <svg className={'ola_thumbnail-image'} width="400" height="300" viewBox="0 0 400 300">
            <path d="M270 94a8 8 0 018 8v94a8 8 0 01-8 8H130a8 8 0 01-8-8v-94a8 8 0 018-8h140zm6 22H124v79a7 7 0 007 7h138a7 7 0 007-7v-79z" />
            <circle cx="140" cy="105" r="5"/>
            <circle cx="159" cy="105" r="5"/>
            <circle cx="178" cy="105" r="5"/>
          </svg>
      }
      { children }
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
  /** Childen nodes */
  children: PT.oneOfType([
    PT.string,
    PT.arrayOf(PT.node),
    PT.node
  ]),
}