import React from 'react'
import renderer from 'react-test-renderer'

import Loading from './index'

jest.mock('react-native-spinkit')

describe('Loading', () => {
  describe('snapshot render', () => {
    test('with initial props', () => {
      const tree = renderer.create(<Loading visible={false} />).toJSON()
      expect(tree).toMatchSnapshot()
    })
    test('with visible props is true', () => {
      const tree = renderer.create(<Loading visible={true} customIndicator={null} />).toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})
