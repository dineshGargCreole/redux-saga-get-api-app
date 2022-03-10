import {LOAD_USERS, SUCCESS_USERS, FAIL_USERS} from '../constants'

export const loadUsers = () => {
    return {
        type: LOAD_USERS
    }
}

export const setUsers = (users) => {
    return {
        type: SUCCESS_USERS,
        payload: users
    }
}

export const failUsers = (err) => {
    return {
        type: FAIL_USERS,
        payload: err
    }
}