import React from 'react';
import style from './Dialogs.module.css';
import  {NavLink} from 'react-router-dom';

const dataInterlocutors = [
    {id: 1, name: 'Max'},
    {id: 2, name: 'Nadya'},
    {id: 3, name: 'Oleg'},
    {id: 4, name: 'Joanna'},
    {id: 5, name: 'Mark'}
]

const Interlocutor = (props) => {
    return (
        <NavLink to={'/dialogs/' + props.id} className={style.interlocutor + ' ' + props.class}>{props.name}</NavLink>
    )
}

const interlocutorItems = dataInterlocutors.map(e => <Interlocutor name = {e.name} id = {e.id}/>)

const Message = (props) => {
    return (
        <div className = {style.message}>{props.text}</div>
    )
}

const Dialogs = () => {
    return (
        <div className = {style.dialogs}>
            <div className = {style.interlocutors}>
                {interlocutorItems}
            </div>
            <div className = {style.messages}>
                <Message text = 'Hello World!' />
                <Message text = 'Hi how are you?' />
                <Message text = 'What are you do?' />
                <Message text = 'She is sexy!' />
                <Message text = 'YO' />
            </div>
        </div>
    )
}

export default Dialogs;