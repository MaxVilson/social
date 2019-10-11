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

const DialogsReducer = (state, action) => {
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

export default DialogsReducer;