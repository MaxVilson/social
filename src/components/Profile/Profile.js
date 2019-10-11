import React from 'react';
import styles from './Profile.module.css';
import Post from '../Post/Post';
import { postCreator, changeTextCreator } from "../../redux/profile-reducer";

const Profile = (props) => {
    debugger;
    const posts = props.state.pageProfile.posts.map(e => <Post id={e.id} text={e.text} likes={e.likes} />);
    const newPost = React.createRef();
    const addPost = () => {
        let text = newPost.current.value;
        props.dispatch(postCreator(text));
        newPost.current.value = '';
    }
    const changeText = () => {
        let text = newPost.current.value;
        props.dispatch(changeTextCreator(text));
    }

    return (
        <div className = {styles.content}>
            <div className = {styles.background}>
                <img src='https://dogisworld.com/wp-content/uploads/2019/05/Beagle.jpg' alt='beagle' />
            </div>

            <div className = {styles.addPost}>
                <textarea onChange = {changeText} value = {props.state.pageProfile.textAreaText} className = {styles.textarea} ref = {newPost}></textarea>
                <button className = {styles.btn} onClick = {addPost}>Add post</button>
            </div>

            <div className={styles.posts}>
                {posts}
            </div>
        </div>
    )
}

export default Profile;