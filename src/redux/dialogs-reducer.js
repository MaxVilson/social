export const sendMessageCreator = (text) => {
    return {
        type: 'SENDMESSAGE',
        text: text
    }
}

export const messageCreator = () => {
    return {
        type: 'CHANGEMESSAGETEXT'
    }
}

const initialState = { // Добавляем начальный state в наш reducer
    dialogs: [{
            id: 1,
            name: 'Max'
        },
        {
            id: 2,
            name: 'Nadi'
        },
        {
            id: 3,
            name: 'Oleg'
        },
        {
            id: 4,
            name: 'Joanna'
        },
        {
            id: 5,
            name: 'Mark'
        }
    ],
    messages: [{
            id: 1,
            message: 'Hello World!'
        },
        {
            id: 2,
            message: 'Hi how are you?'
        },
        {
            id: 3,
            message: 'What are you do?'
        },
        {
            id: 4,
            message: 'She is sexy!'
        },
        {
            id: 5,
            message: 'YO'
        },
    ],
    textAreaText: ''
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SENDMESSAGE':
            const message = {
                id: 6,
                message: action.text
            }
            state.messages.push(message);
            state.textAreaText = '';
            return state;

        case 'CHANGEMESSAGETEXT':
            state.textAreaText = action.text;
            return state;

        default:
            return state;
    }
}

export default dialogsReducer;