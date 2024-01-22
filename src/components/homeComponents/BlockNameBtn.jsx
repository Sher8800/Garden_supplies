import React from 'react'
import styles from "../../styles/homeStyles/BlockNameBtn.module.css";

function BlockNameBtn({ pageTitle, btnTitle }) {
  return (
    <div className={styles.title_container}>
      <p className={styles.title}>{pageTitle}</p>

      <div className={styles.line_btn}>
        <div className={styles.line}></div>
        <button className={styles.btn}>{btnTitle}</button>
      </div>
    </div>
  )
}

export default BlockNameBtn