import React from 'react'
import {default as PT} from 'prop-types'
import cx from 'classnames'

const Kpi = ({ title, value, description, variant, loading, className, ...props }) => {
    return (
        <div className={cx('ola_kpi', variant && `is-${variant}`, loading && 'is-loading', className)} {...props}>
            { !loading && <>
                <div className="ola_kpi-title">{title}</div> 
                <div className="ola_kpi-value">{value}</div>
                { description && <div className="ola_kpi-description">{description}</div>}
            </>}
        </div>
    )
}
  
Kpi.defaultProps = {
    title: null,
    value: null,
    description: null,
    variant: null,
    loading: false,
    className: null
}

Kpi.propTypes = {
    /** Kpi title */
    title: PT.oneOfType([
        PT.string,
        PT.arrayOf(PT.node),
        PT.node
    ]).isRequired,
    /** Kpi Value */
    value: PT.oneOfType([
        PT.string,
        PT.arrayOf(PT.node),
        PT.node
    ]),
    /** Kpi Description */
    description: PT.oneOfType([
        PT.string,
        PT.arrayOf(PT.node),
        PT.node
    ]),
    /** Kpi variants */
    variant: PT.oneOf(['positive', 'negative']),
    /** loading state */
    loading: PT.bool,
    /** Extra className */
    className: PT.string,
  }

export default Kpi