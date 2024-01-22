import React from 'react'
import styles from '../styles/pathStyles/PathStyles.module.css'

function PathComponents() {
  return (
    <div className={styles.path_container}>
      <div className={styles.path}>Main page</div>
      <div className={styles.line}></div>
      <div className={styles.path}>Categories</div>
    </div>
  )
}

export default PathComponents