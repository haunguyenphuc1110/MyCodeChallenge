import 'jsdom-global/register'

import Adapter from 'enzyme-adapter-react-16'
import Enzyme from 'enzyme'

/**
 * Set up Enzyme to mount to DOM, simulate events,
 * and inspect the DOM in tests.
 */
Enzyme.configure({ adapter: new Adapter() })

jest.useFakeTimers()

jest
  .mock('@react-native-async-storage/async-storage', () => ({
    getItem: async (...args) => args,
    setItem: async (...args) => args,
    removeItem: async (...args) => args
  }))
  .mock('react-native-i18n', () => ({
    t: jest.fn(translation => translation),
    currentLocale: jest.fn(() => 'en')
  }))
  .mock('react-native-vector-icons', () => {
    return {
      RNVectorIconsManager : jest.mock(),
      createIconSetFromIcoMoon:jest.fn()
    }});