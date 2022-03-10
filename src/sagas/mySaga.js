import {call, put, takeEvery, all, fork} from 'redux-saga/effects'
import {loadUsers, setUsers, failUsers} from '../actions'
import {LOAD_USERS} from '../constants'
import {fetchUsers} from '../api'


function* handleUsers() {
    try {
        const users = yield call(fetchUsers)
        yield put(setUsers(users))
    } catch(err) {
        yield put(failUsers(err.toString()))
    }
}

function* watchUsers() {
    yield takeEvery(LOAD_USERS, handleUsers)
}

const mySaga = [fork(watchUsers)]

export default mySaga