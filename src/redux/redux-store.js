import { createStore, combineReducers } from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import usersReducer from "./users-reducer";

const reducers = combineReducers({ // Склеиваем наши редюсеры в один (обращаемся к свойствам по ключам, в них лежат наши посты, сообщения и другие начальные значения)
    pageProfile: profileReducer,
    pageDialogs: dialogsReducer,
    pageUsers: usersReducer
})

const store = createStore(reducers);

export default store;