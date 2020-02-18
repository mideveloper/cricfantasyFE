import { call, put, takeLatest } from 'redux-saga/effects';
// import Api from '...';
import { login, setLocalStorage } from './utils';
import {
  LOGIN as LOGIN_ACTION,
  LOGIN_SUCCESS as LOGIN_SUCCESS_ACTION,
  LOGIN_FAIL as LOGIN_FAIL_ACTION,
  REQUEST_TEST as REQUEST_TEST_ACTION,
  RECIEVE_TEST as RECIEVE_TEST_ACTION,
  recieveTest,
} from './actions';

function* runTest() {
  try {
    // const user = yield call(Api.fetchUser, action.payload.userId);
    yield put(recieveTest('Test Passed!'));
  } catch (e) {
    yield put({ type: RECIEVE_TEST_ACTION, text: 'Test Failed :(' });
  }
}

function* loginSaga({ payload }) {
  try {
    const { data } = yield call(login, payload);
    if (data.data) {
      yield put({ type: LOGIN_SUCCESS_ACTION, payload: data });
      setLocalStorage('loggedInUser', data.data);
      window.location.href = '/create-team';
    } else {
      yield put({ type: LOGIN_FAIL_ACTION, payload: data });
    }
  } catch (e) {
    yield put({
      type: LOGIN_FAIL_ACTION,
      payload: { meta: { message: 'Could not connect to server' } },
    });
  }
}

export default function* myTestSaga() {
  yield takeLatest(REQUEST_TEST_ACTION, runTest);
  yield takeLatest(LOGIN_ACTION, loginSaga);
}
