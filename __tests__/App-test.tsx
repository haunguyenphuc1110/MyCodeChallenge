/**
 * @format
 */

import 'react-native'
import React from 'react'
import {
  Provider
} from 'react-redux'

import App from '../src/App'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'

const mockStore = configureStore([])
const initialState = {
  card: {
    info: {
      customer_name: 'Nguyen Phuc Hau',
      card_number: '1234567812345678',
      thru: '09/25',
      cvv: '123',
      available_balance: 3000
    },
    config: {
      active: true,
      spending_limit_active: true,
      spending_limit_weekly: 5000,
      current_spending_limit: 345
    }
  }
}

describe('snapshot render', () => {
  let store
  let component: renderer.ReactTestRenderer

  beforeEach(() => {
    store = mockStore(initialState)
    component = renderer.create(
      <Provider store={store}>
        <App />
      </Provider>
    )
  })
  test('with given state from Redux store', () => {
    expect(component).toMatchSnapshot()
  })
})

