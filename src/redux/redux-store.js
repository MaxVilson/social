import { createStore, combineReducers } from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

const reducers = combineReducers({ // Склеиваем наши редюсеры в один (обращаемся к свойствам по ключам, в них лежат наши посты, сообщения и другие начальные значения)
    pageProfile: profileReducer,
    pageDialogs: dialogsReducer
})

const store = createStore(reducers);

export default store;