import { takeEvery, put, call } from 'redux-saga/effects'

import { getCardConfig, getCardInfo, updateCardConfig } from 'Actions/cardActions'
import {
  startFetch,
  fetchFail,
  getConfigSuccess,
  getInfoSuccess,
  updateConfigSuccess
} from 'Reducers/cardReducer'
import ApiServices from 'Services/api/calls'

function* getCardConfigsSaga(): any {
  try {
    yield put(startFetch())
    const response = yield call([ApiServices, 'getCardConfigs'])
    yield put(getConfigSuccess(response.data))
  } catch (e) {
    yield put(fetchFail(e.message))
  }
}

function* getCardInfoSaga(): any {
  try {
    yield put(startFetch())
    const response = yield call([ApiServices, 'getCardInfo'])
    yield put(getInfoSuccess(response.data))
  } catch (e) {
    yield put(fetchFail(e.message))
  }
}

function* updateCardConfigsSaga(): any {
  try {
    yield put(startFetch())
    const response = yield call([ApiServices, 'updateCardConfigs'])
    yield put(updateConfigSuccess(response.data))
  } catch (e) {
    yield put(fetchFail(e.message))
  }
}

export default function* cardSagas() {
  yield takeEvery(getCardConfig.toString(), getCardConfigsSaga)
  yield takeEvery(getCardInfo.toString(), getCardInfoSaga)
  yield takeEvery(updateCardConfig.toString(), updateCardConfigsSaga)
}
