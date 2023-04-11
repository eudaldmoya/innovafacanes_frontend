import React from 'react'
import styles from '@/styles/Reason.module.css'


const Reason = (props) => {
  return (
    <div className={styles.reasonWrapper}>
        <div className={styles.reasonNumber}>
            {props.number}
        </div>
        <div className={styles.reasonTextWrapper}>
            <h3 className={styles.reasonTitle}>{props.title}</h3>
            <p className={styles.reasonDesc}>{props.description}</p>
        </div>
    </div>
  )
}

export default Reason;