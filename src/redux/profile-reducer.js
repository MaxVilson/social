export const postCreator = (text) => {
    return {
        type: 'ADDPOST',
        text: text
    }
}
export const changeTextCreator = () => {
    return {
        type: 'CHANGETEXT'
    }
}

const profileReducer = (state, action) => {
    switch (action.type) {
        case 'ADDPOST':
            const post = {
                id: 4,
                text: action.text,
                likes: 0
            };
            state.posts.push(post);
            state.textAreaText = '';
            return state;

        case 'CHANGETEXT':
            state.textAreaText = action.text;
            return state;

        default:
            return state;
    }
}

export default profileReducer;