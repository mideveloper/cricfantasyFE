import { put, takeLatest } from 'redux-saga/effects';
// import Api from '...';
import { REQUEST_TEST, RECIEVE_TEST, recieveTest } from './actions';

function* runTest() {
  try {
    // const user = yield call(Api.fetchUser, action.payload.userId);
    yield put(recieveTest('Test Passed!'));
  } catch (e) {
    yield put({ type: RECIEVE_TEST, text: 'Test Failed :(' });
  }
}

export default function* myTestSaga() {
  yield takeLatest(REQUEST_TEST, runTest);
}
