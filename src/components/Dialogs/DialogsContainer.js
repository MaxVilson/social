// Создаем компонент контейнер, которая будет оберткой для нашей презентационной компоненты, контейнерная компонента будет иметь доступ к store, а презентационная нет. Здесь мы создаем функции из данных store которые нужны презентационной компоненте. 

import { messageCreator, sendMessageCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux'

const mapStateToProps = (state) => { // Функция которая передает state в качестве параметра в функцию контейнер
    return {
        messages: state.pageDialogs.messages,
        dialogs: state.pageDialogs.dialogs,
        textAreaText: state.pageDialogs.textAreaText
    }
}
const mapDispatchToProps = (dispatch) => { // Функция которая передает в dispatch функции
    return {
        changeText: (text) => {
            dispatch(messageCreator(text));
        },
        sendMessage: (text) => {
            dispatch(sendMessageCreator(text));
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs); // Создаем контейнерную компоненту с помощью функции коннект,она внутри создает презентационную компоненту и передаем в нее в качестве props параметры. 

export default DialogsContainer;