import React, { createContext } from 'react'
import cx from 'classnames'
import './Form.css'

export function Label({ className, ...props }) {
    return (
        <label className={cx('Label', className)} {...props} />
    )
}

export const Input = React.forwardRef(({ className, ...props }, ref) => {
    return (
        <input className={cx('Input', className)} type='text' ref={ref} {...props}
    )
})