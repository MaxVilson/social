// Создаем компонент контейнер, которая будет оберткой для нашей презентационной компоненты, контейнерная компонента будет иметь доступ к store, а презентационная нет. Здесь мы создаем функции из данных store которые нужны презентационной компоненте. 

import React from 'react';
import { messageCreator, sendMessageCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {
 
    let state = props.store.getState().pageDialogs;

    const changeText = (text) => {
        props.store.dispatch(messageCreator(text));
    };

    const sendMessage = (text) => {
        props.store.dispatch(sendMessageCreator(text));
    };


    return <Dialogs messages={state.messages} dialogs={state.dialogs} sendMessage={sendMessage} changeText={changeText} textAreaText={state.textAreaText} />
}

export default DialogsContainer;