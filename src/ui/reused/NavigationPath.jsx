import React from 'react'
import styles from '../../styles/uiStyles/reused/NavigationPath.module.css'

function NavigationPath() {
  return (
    <div className={styles.path_container}>
      <div className={styles.path}>Main page</div>
      <div className={styles.line}></div>
      <div className={styles.path}>Categories</div>
    </div>
  )
}

export default NavigationPath