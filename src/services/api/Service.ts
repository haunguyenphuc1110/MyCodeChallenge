import axios from 'axios'

export default class Service {
  url: string
  config: object
  token: string | null
  data: object

  constructor(url: string, config: object = {}, token: string | null = null, data: object = {}) {
    this.url = url
    this.config = config
    this.token = token
    this.data = data
  }

  get() {
    return axios.get(this.url, this.config)
      .then(response => response)
      .catch((error) => {
        return error
      })
  }

  post() {
    return axios.post(this.url, this.data, this.config)
      .then(response => response)
      .catch((error) => {
        return error
      })
  }

  patch() {
    return axios.patch(this.url, this.data, this.config)
      .then(response => response)
      .catch((error) => {
        return error
      })
  }

  put() {
    return axios.put(this.url, this.data, this.config)
      .then(response => response)
      .catch((error) => {
        return error
      })
  }

  delete() {
    return axios.delete(this.url, this.config)
      .then(response => response)
      .catch((error) => {
        return error
      })
  }
}