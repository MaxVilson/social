const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

export const followAC = (userId) =>  ({ type: FOLLOW, userId } );
export const unfollowAC = (userId) =>  ({ type: UNFOLLOW, userId } );
export const setUsersAC = (users) => ({ type: SET_USERS, users } );
export const setCurrentPageAC = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage } );
export const setUsersTotalCountAC = (count) => ( {type: SET_USERS_TOTAL_COUNT, count} );
export const toggleIsFetchingAC = (isFetching) => ( {type: TOGGLE_IS_FETCHING, isFetching} );

const initialState = {
    users: [],
    pageSize: 3,
    totalUsersCount: 10,
    currentPage: 1,
    isFetching: true
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, follow: true}
                    }
                    return user;
                })
            }
        }

        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, follow: false}
                    }
                    return user;
                })
            }
        }

        case SET_USERS: {
            return {
                ...state, 
                users: action.users
            }
        }

        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }

        case SET_USERS_TOTAL_COUNT: {
            return {
                ...state,
                totalUsersCount: action.count
            }
        }

        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }

        default:
            return state;
    }
}

export default usersReducer;