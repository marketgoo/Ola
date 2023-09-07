import React from 'react'
import { default as PT } from 'prop-types'
import cx from 'classnames'
import ButtonIcon from '../ButtonIcon'
import { CheckCircle, Question, XCircle, Warning } from '@phosphor-icons/react'

const Toast = ({
  title,
  variant,
  className,
  icon,
  onClose,
  isClosable,
  children,
  top,
  right,
  left,
  bottom,
}) => {
  let iconElement = icon
  if (!iconElement) {
    const icons = {
      positive: CheckCircle,
      negative: XCircle,
      neutral: Question,
      warning: Warning,
    }
    const DefaultIcon = icons[variant]

    iconElement = <DefaultIcon size={24} weight="fill" />
  }

  const styles = cx(
    'ola_toast',
    `is-${variant}`,
    className
  )
  return (
    <div className={styles} style={{
      '--top': top,
      '--right': right,
      '--left': left,
      '--bottom': bottom
    }}>
      <div className='ola_toast-container'>
        <div className='ola_toast-icon'>
          {iconElement}
        </div>
        <div className='ola_toast-content'>
          {title && <div className="ola_toast-title ola-font-1-bold">{title}</div>}
          {children && <div className="ola_toast-description">{children}</div>}
        </div>
        {isClosable && <div className='ola_toast-close'><ButtonIcon
          icon="close"
          size="small"
          variant="dark"
          onClick={onClose}
        /></div>}
      </div>
    </div>
  )
}


Toast.defaultProps = {
  variant: 'neutral',
  top: '24px',
  right: '24px',
  left: 'unset',
  bottom: 'unset',
  isClosable: true
}

Toast.propTypes = {
  title: PT.string,
  children: PT.oneOfType([
    PT.string,
    PT.node,
    PT.arrayOf(PT.node)
  ]),
  /** Name of the icon in this lib (see Ola Icon), or a svg direcly **(preferred a Phosphor Icon)** */
  icon: PT.oneOfType([
    PT.string,
    PT.shape({
      type: PT.oneOf(['svg']),
    }),
    PT.node,
    PT.arrayOf(PT.node)
  ]),
  /** Toast variant */
  variant: PT.oneOf(['warning', 'positive', 'negative', 'neutral']),
  /** Extra className */
  className: PT.string,
  /** closable */
  isClosable: PT.bool,
  /** Close event */
  onClose: PT.func,
  /** Positions */
  top: PT.string,
  bottom: PT.string,
  left: PT.string,
  right: PT.string,
}

export default Toast