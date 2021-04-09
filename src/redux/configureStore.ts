import {
  applyMiddleware,
  compose,
  createStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import { persistReducer, persistStore } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage'

import rootSagas from './sagas'
import rootReducers from './reducers'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  timeout: null
} as any

function configureStore(initialState = {}) {
  const sagaMiddleware = createSagaMiddleware()
  const middlewares = [
    ...getDefaultMiddleware({ thunk: false, serializableCheck: false }),
    sagaMiddleware,
  ]

  const persistedReducer = persistReducer(persistConfig, rootReducers)

  let composeEnhancers = compose

  if (__DEV__) {
    composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  }

  const store = createStore(
    persistedReducer,
    initialState as any,
    composeEnhancers(applyMiddleware(...middlewares)),
  )

  const persistor = persistStore(store)

  sagaMiddleware.run(rootSagas)

  return { store, persistor }
}

const { store, persistor } = configureStore()
export { store, persistor }
