import React from 'react'

import Sidebar from 'components/common/Sidebar'
import Home from 'pages/Home'

import styles from './MainLayout.module.scss'

const MainLayout: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.sidebar}>
                <Sidebar />
            </div>
            <div className={styles.content}>
                <Home />
            </div>
        </div>
    )
}

export default MainLayout
