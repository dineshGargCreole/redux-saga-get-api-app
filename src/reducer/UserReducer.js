import {LOAD_USERS, SUCCESS_USERS, FAIL_USERS} from '../constants'


const initialState = {
    loading: false,
    users: [],
    error: null
}


const UserReducer = (state=initialState, action) => {
    switch(action.type) {
        case LOAD_USERS:
            return {
                ...state,
                loading: true
            }

        case SUCCESS_USERS:
            return {
                ...state,
                users: action.payload,
                loading: false,
            }

        case FAIL_USERS:
            return {
                ...state,
                error: action.payload,
                loading: false
            }

        default:
            return state
    }
}

export default UserReducer