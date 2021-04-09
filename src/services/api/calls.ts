import Service from './Service'

const BASE_URL = 'https://demo7730250.mockable.io'

const getCardConfigs = () => {
  const task = new Service(`${BASE_URL}/cards/config`)

  return task.get().then(data => {
    return data
  })
}

const getCardInfo = () => {
  const task = new Service(`${BASE_URL}/cards`)

  return task.get().then(data => {
    return data
  })
}

const updateCardConfigs = () => {
  const task = new Service(`${BASE_URL}/cards/config`)

  return task.put().then(data => {
    return data
  })
}

export default {
  getCardConfigs,
  getCardInfo,
  updateCardConfigs
}