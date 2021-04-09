import React from 'react'
import {AppRegistry} from 'react-native';
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'

import { store, persistor } from 'redux/configureStore'
import Main from './src/App';
import {name as appName} from './app.json';

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Main />
    </PersistGate>
  </Provider>
)

AppRegistry.registerComponent(appName, () => App);
