// Создаем компонент контейнер, которая будет оберткой для нашей презентационной компоненты, контейнерная компонента будет иметь доступ к store, а презентационная нет. Здесь мы создаем функции из данных store которые нужны презентационной компоненте. 

import { postCreator, changeTextCreator } from "../../redux/profile-reducer";
import Profile from './Profile';
import { connect } from 'react-redux'

const mapStateToProps = (state) => { // Функция которая передает state в качестве параметра в функцию контейнер
    return {
        posts: state.pageProfile.posts,
        textAreaText: state.pageProfile.textAreaText
    }
}
const mapDispatchToProps = (dispatch) => { // Функция которая передает в dispatch функции
    return {
        addPost: (text) => {
            dispatch(postCreator(text));
        },
        changeText: (text) => {
            dispatch(changeTextCreator(text));
        }
    }
}

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile); // Создаем контейнерную компоненту с помощью функции коннект,она внутри создает презентационную компоненту и передаем в нее в качестве props параметры. 

export default ProfileContainer;