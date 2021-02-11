import React from 'react'
import {default as PT} from 'prop-types'
import cx from 'classnames'

const Thumbnail = ({ className, url }) => {
    return (
        <div className={ cx( 'ola_thumbnail', className )}>
            <img className={'ola_thumbnail-image'} src={url} />
        </div>
    );
}

export default Thumbnail

Thumbnail.defaultProps = {
    className: null
}

Thumbnail.propTypes = {
    /** Extra className */
    className: PT.string,
    /** Image url */
    url: PT.string
}