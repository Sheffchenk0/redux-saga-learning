import {
  take,
  takeEvery,
  takeLatest,
  takeLeading,
  put,
  call,
  fork,
} from '@redux-saga/core/effects';
import { getPeople, getPlanets } from '../api';

export function* loadPeople() {
  const people = yield call(getPeople);
  yield put({ type: 'SET_PEOPLE', payload: people.results });
}
export function* loadPlanets() {
  const planets = yield call(getPlanets);
  yield put({ type: 'SET_PLANETS', payload: planets.results });
}

export function* workerSaga() {
  yield fork(loadPlanets);
  yield fork(loadPeople);
}

export function* watchLoadDataSaga() {
  yield takeLeading('LOAD_DATA', workerSaga);
}

function* rootSaga() {
  yield watchLoadDataSaga();
}

export default rootSaga;
