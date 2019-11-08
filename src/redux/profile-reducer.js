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

const initialState = { // Добавляем начальный state в наш reducer
    posts: [{
            id: 1,
            text: 'My first post!',
            likes: "12"
        },
        {
            id: 2,
            text: 'My second post!',
            likes: "22"
        },
        {
            id: 3,
            text: 'My third post!',
            likes: "2812"
        }
    ],
    textAreaText: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADDPOST': {
            return {
                posts: [...state.posts, {id: 4, text: action.text, likes: 0}]
            }
        }

        case 'CHANGETEXT': {
            return {
                ...state,
                textAreaText: action.text
            }
        }

        default:
            return state;
    }
}

export default profileReducer;