import React from 'react'
import renderer from 'react-test-renderer'

import Icon from './index'

describe('Icon', () => {
  describe('snapshot render', () => {
    test('with initial props', () => {
      const tree = renderer.create(<Icon name={'award'} />).toJSON()
      expect(tree).toMatchSnapshot()
    })
    test('with hasBackground props is true', () => {
      const tree = renderer.create(<Icon name={'award'} hasBackground={true} />).toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})
