import React from 'react'
import clsx from 'clsx'

import styles from './Input.module.scss'

type Props = {
    type?: string
    value?: string
    error?: boolean
    disabled?: boolean
    helperText?: string
    startIcon?: any
    endIcon?: any
    size?: string
    fullwidth?: boolean
    multiline?: boolean
    row?: any
    For?: any
}

const Input: React.FC<Props> = (props) => {
    const {
        type = 'text',
        error,
        disabled,
        value = 'Placeholder',
        helperText,
        startIcon,
        endIcon,
        size = '',
        row,
        multiline,
        For,
        fullwidth,
    } = props
    return (
        <div className={styles.main}>
            <span className={styles.textcss}>Label</span>
            <div
                className={clsx(styles.inputBlock, {
                    [styles.fullwidth]: fullwidth,
                })}
            >
                {startIcon && (
                    <span
                        className={`material-icons`}
                        style={{
                            position: 'absolute',
                            top: '45px',
                            left: '12px',
                            marginRight: '35px',
                            color: '#828282',
                        }}
                    >
                        call
                    </span>
                )}
                {!multiline ? (
                    <input
                        placeholder={value}
                        type={type}
                        disabled={disabled}
                        className={clsx({
                            [styles.error]: error,
                            [styles.disabled]: disabled,
                            'material-icons': startIcon || endIcon,
                            [styles.sm]: size === 'sm',
                            [styles.md]: size === 'md',
                            [styles.lg]: size === 'lg',
                            [styles.fullwidth]: fullwidth,
                        })}
                        style={
                            startIcon && {
                                textIndent: 0,
                                paddingLeft: '45px',
                            }
                        }
                    />
                ) : (
                    <textarea
                        disabled={disabled}
                        rows={row}
                        id={For}
                        placeholder={value}
                        className={clsx(styles.textareaCss, {
                            [styles.error]: error,
                            [styles.disabled]: disabled,
                            [styles.fullwidth]: fullwidth,
                        })}
                    />
                )}
                {helperText && (
                    <p
                        className={clsx({
                            [styles.errorParagraph]: error,
                        })}
                    >
                        {helperText}
                    </p>
                )}
                {endIcon && (
                    <span
                        className={clsx(`material-icons`, {
                            [styles.style]: endIcon,
                        })}
                        style={{
                            position: 'absolute',
                            top: '46px',
                            marginLeft: '-320px',
                            right: '12px',
                            color: '#828282',
                        }}
                    >
                        lock
                    </span>
                )}
            </div>
        </div>
    )
}

export default Input
