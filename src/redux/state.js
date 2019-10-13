import profileReducer from "./profile-reducer";
import dialogsReducer from './dialogs-reducer';

const store = {
    _state: {
        pageProfile: {
            posts: [
                { id: 1, text: 'My first post!', likes: "12" },
                { id: 2, text: 'My second post!', likes: "22" },
                { id: 3, text: 'My third post!', likes: "2812" }
            ],
            textAreaText: ''
        },
        
        pageDialogs: {
            dialogs: [
                {id: 1, name: 'Max'},
                {id: 2, name: 'Nadi'},
                {id: 3, name: 'Oleg'},
                {id: 4, name: 'Joanna'},
                {id: 5, name: 'Mark'}
            ],
            messages: [
                {id: 1, message: 'Hello World!'},
                {id: 2, message: 'Hi how are you?'},
                {id: 3, message: 'What are you do?'},
                {id: 4, message: 'She is sexy!'},
                {id: 5, message: 'YO'},
            ],
            textAreaText: ''
        }
    },

    dispatch(action) {
        this._state.pageProfile = profileReducer(this._state.pageProfile, action);
        this._state.pageDialogs = dialogsReducer(this._state.pageDialogs, action);
        this.renderDom(this._state);
    },

    getState() {
        return this._state;
    },

    renderDom() {

    },

    subscribe(observer) {
        this.renderDom = observer;
    }    
}

export default store;