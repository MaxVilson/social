import React from 'react';
import style from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';

const Dialogs = (props) => {

    const newPost = React.createRef();

    const changeText = () => {
        let text = newPost.current.value;
        props.changeText(text);
    };

    const sendMessage = () => {
        let text = newPost.current.value;
        props.sendMessage(text);
    };

    const Interlocutor = (props) => {
        return (
            <div>
                <NavLink to={'/dialogs/' + props.id} className={style.interlocutor + ' ' + props.class}>{props.name}</NavLink>
            </div>
        )
    };

    const interlocutorItems = props.dialogs.map(e => <Interlocutor name = {e.name} id = {e.id}/>);

    const Message = (props) => {
        return (
            <div id = {props.id} className = {style.message}>{props.message}</div>
        )
    };

    const messageItems = props.messages.map(e => <Message message = {e.message} id = {e.id} />);

    return (
        <div className = {style.dialogs}>
            <div className = {style.interlocutors}>
                {interlocutorItems}
            </div>

            <div className = {style.messages}>
                {messageItems}
            </div>

            <div className = {style.addPost}>
                <textarea value = {props.textAreaText} onChange = {changeText} className = {style.textarea} ref = {newPost}></textarea>
                <button className = {style.btn} onClick = {sendMessage}>Add post</button>
            </div>
        </div>
    )
}

export default Dialogs;