import React from 'react';
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}> 
                <img src='https://habrastorage.org/getpro/moikrug/uploads/user/100/014/278/9/avatar/medium_134166cbbb3aa78cb0865b8c0dff70e2.jpg' alt='logo' />
            </div>
        </header>
    )
}

export default Header;