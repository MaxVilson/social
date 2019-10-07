import React from 'react';
import styles from './Profile.module.css';

const Profile = () => {
    return (
        <div className = {styles.content}>
            <div className = {styles.background}>
                <img src='https://dogisworld.com/wp-content/uploads/2019/05/Beagle.jpg' />
            </div>
        </div>
    )
}

export default Profile;