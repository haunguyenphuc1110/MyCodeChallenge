import { all } from 'redux-saga/effects'

import cardSagas from './cardSagas'

function* rootSaga() {
  yield all([
    cardSagas()
  ])
}

export default rootSaga
