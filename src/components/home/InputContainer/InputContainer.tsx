import React from 'react'

import Input from '../Input'
import ContainerTitle from './ContainerTitle'

import styles from './InputContainer.module.scss'

const InputContainer: React.FC = () => {
    return (
        <div className={styles.root}>
            <div className={styles.group}>
                <ContainerTitle text={'Input variants:'} />
                <div className={styles.inputsGroup}>
                    <div className={styles.singleGroup}>
                        <p>{'<Input />'}</p>
                        <Input />
                    </div>
                    {/*-----------------------------------------------------*/}
                    <div className={styles.singleGroup}>
                        <p>{'<Input error />'}</p>
                        <Input error />
                    </div>
                </div>
                {/*-----------------------------------------------------*/}
                <div className={styles.inputsGroup}>
                    <div className={styles.singleGroup}>
                        <p>{'<Input disabled />'}</p>
                        <Input disabled />
                    </div>
                </div>
                {/*-----------------------------------------------------*/}
                <div className={styles.inputsGroup}>
                    <div className={styles.singleGroup}>
                        <p>{'<Input value=”Text” />'}</p>
                        <Input value={'Text'} />
                    </div>
                </div>
                {/*-----------------------------------------------------*/}
                <div className={styles.inputsGroup}>
                    <div className={styles.singleGroup}>
                        <p>{'<Input helperText=”Some interesting text” />'}</p>
                        <Input helperText={'Some interesting text'} />
                    </div>
                    <div className={styles.singleGroup}>
                        <p>
                            {
                                '<Input helperText=”Some interesting text” error />'
                            }
                        </p>
                        <Input helperText={'Some interesting text'} error />
                    </div>
                </div>
                {/*-----------------------------------------------------*/}
                <div className={styles.inputsGroup}>
                    <div className={styles.singleGroup}>
                        <p>{'<Input startIcon />'}</p>
                        <Input startIcon />
                    </div>
                    <div className={styles.singleGroup}>
                        <p>{'<Input endIcon />'}</p>
                        <Input endIcon />
                    </div>
                </div>
                {/*-----------------------------------------------------*/}
                <div className={styles.inputsGroup}>
                    <div className={styles.singleGroup}>
                        <p>{'<Input size=”sm” />'}</p>
                        <Input size={'sm'} />
                    </div>
                    <div className={styles.singleGroup}>
                        <p>{'<Input size=”md” />'}</p>
                        <Input size={'md'} />
                    </div>
                    <div className={styles.singleGroup}>
                        <p>{'<Input size=”lg” />'}</p>
                        <Input size={'lg'} />
                    </div>
                </div>
                {/*-----------------------------------------------------*/}
                <div className={styles.inputsGroup}>
                    <div
                        className={styles.singleGroup}
                        style={{
                            display: 'flex',
                            flexWrap: 'nowrap',
                            width: '100%',
                        }}
                    >
                        <p>{'<Input fullwidth />'}</p>
                        <Input fullwidth />
                    </div>
                </div>
                {/*-----------------------------------------------------*/}
                <div className={styles.inputsGroup}>
                    <div className={styles.singleGroup}>
                        <p>{'<Input multiline row={"4"} />'}</p>
                        <Input
                            For="multiline"
                            multiline
                            fullwidth
                            row={'8  '}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InputContainer
