import React from 'react';
import loader from '../../assets/images/preloader.gif';
import styles from './Preloader.module.css';

const Preloader = () => {
  return (
    <div className={styles.preloader}>
      <img src={loader} alt='loader' />
    </div>
  )
}

export default Preloader;