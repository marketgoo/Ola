import React from 'react'
import { default as PT } from 'prop-types'
import cx from 'classnames'
import Spinner from '../Spinner'


const Device = ({variant, url, className,busy,...props})=> {
  const styles = cx(
    'ola_device',
    { [`ola_device-${variant}`]: variant },
    { 'is-busy': busy },
    className
  )
 
  return (
    <div className={styles}{...props}>
      <div className='ola_device-frame'>
        {url ? <img
          className={'ola_device-content'}
          src={url} /> : busy &&
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
  busy: null,
  variant: 'iphone-8',
}

Device.propTypes = {
  /** Device variants */
  variant: PT.oneOf(['iphone-8', 'iphone-x']),
  /** Extra className */
  className: PT.string,
  /** Url img */
  url: PT.string,
  /** Loading */
  busy: PT.oneOfType([
    PT.string,
    PT.bool
  ]),
}

export default Device
