import React from 'react'
import { default as PT } from 'prop-types'
import cx from 'classnames'
import Spinner from '../Spinner'
import { children } from 'min-document'



const Device = ({variant, url, className,...props})=> {
  const styles = cx(
    'ola_device',
    { [`ola_device-${variant}`]: variant },
    className
  )
 
  return (
    <div className={styles}>
        <div className="ola_device-frame">
          {url ? <img
            className={'ola_device-content'}
            src={url} /> :
            <div className={'ola_device-content ola_device-spinner'}>
              <Spinner size="medium"/>
            </div>}
        </div>
        <div className="ola_device-stripe"></div>
        <div className="ola_device-header"></div>
        <div className="ola_device-sensors"></div>
        <div className="ola_device-btns"></div>
        <div className="ola_device-power"></div>
    </div>
  )
}
Device.defaultProps = {
  className: null,
  variant: 'iphone-8',

}

Device.propTypes = {
  /** Device variants */
  variant: PT.oneOf(['iphone-8', 'iphone-x']),
  /** Extra className */
  className: PT.string,
  url: PT.string,
}

export default Device
