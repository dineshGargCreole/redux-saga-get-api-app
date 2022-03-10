import {call, put, takeEvery, all} from 'redux-saga/effects'
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

function* rootSaga() {
    yield all([
        watchUsers()
    ])
}

export default rootSaga;

