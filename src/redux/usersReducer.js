const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

const initialState = {
    users: [
        {id: 1, followed: false, fullName: 'Nikita', status: 'I am future React developer', location: {city: 'Minsk', country: 'Belarus'}},
        {id: 2, followed: true, fullName: 'Dima', status: 'I am backend developer', location: {city: 'Moscow', country: 'Russia'}},
        {id: 3, followed: false, fullName: 'Andrey', status: 'I am student', location: {city: 'Kiev', country: 'Ukraine'}},
        {id: 4, followed: true, fullName: 'Sasha', status: 'I am sales manager', location: {city: 'Los Angeles', country: 'USA'}},
    ]
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.userID) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.userID) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            }
        case SET_USERS:
            return { ...state, users: [ ...action.users ]}
        default:
            state;
    }
}

export const followAC = (userID) => ({ type: FOLLOW, userID });
export const unFollowAC = (userID) => ({ type: UNFOLLOW, userID });
export const setUsersAC = (users) => ({ type: SET_USERS, users });

export default usersReducer;