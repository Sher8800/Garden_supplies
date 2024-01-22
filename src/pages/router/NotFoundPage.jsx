import React from 'react'
import styles from '../../styles/notFoundStyles/NotFoundPage.module.css'
import cactus from '../../images/cactus.png'
import four from '../../images/four.png'

function NotFoundPage() {
  return (
    <div className={styles.main_container}>
      <div className={styles.notFoundPage_container}>
        <div className={styles.img_container}>
          <img className={styles.img} src={four} alt="image" />
          <img className={styles.img} src={cactus} alt="image" />
          <img className={styles.img} src={four} alt="image" />
        </div>

        <div className={styles.tex_container}>
          <p className={styles.txt_big}>Page Not Found</p>
          <p className={styles.txt_small}>
            We’re sorry, the page you requested could not be found. <br />
            Please go back to the homepage.
          </p>
        </div>

        <button className={styles.btn}>Go Home</button>
      </div>
    </div>
  )
}

export default NotFoundPage