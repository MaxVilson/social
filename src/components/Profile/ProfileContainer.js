import React from 'react';
import { postCreator, changeTextCreator } from "../../redux/profile-reducer";
import Profile from './Profile';

const ProfileContainer = (props) => {

    let state = props.store.getState().pageProfile;

    const addPost = (text) => {
        props.store.dispatch(postCreator(text));
    }
    const changeText = (text) => {
        props.store.dispatch(changeTextCreator(text));
    }

    return (
        <Profile textAreaText={state.textAreaText} changeText={changeText} addPost={addPost} posts={state.posts} />
    )
}

export default ProfileContainer;