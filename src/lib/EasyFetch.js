export default class EasyFetch {
  static addQueryStringToUrl(url, params) {
    let queryString = ''
    for (let key in params) {
      if (params.hasOwnProperty(key) && typeof params[key] !== 'undefined') {
        let value = params[key]
        queryString += `${encodeURIComponent(key)}=${encodeURIComponent(value)}&`
      }
    }

    if (queryString.length > 0) {
      queryString = queryString.substring(0, queryString.length - 1) // chop off last "&"
      return `${url}?${queryString}`
    }

    return url
  }

  static getRequest(url, options = {}) {
    const controller = new AbortController()
    const { signal } = controller
    const { params } = options
    const request = fetch(
        this.addQueryStringToUrl(url, params),
        {
          ...options,
          signal,
        }
    )

    request.controller = controller

    return request
  }

  static async parseResponse(response) {
    const contentType = response.headers.get('Content-Type')
    if (
      contentType &&
      contentType.indexOf('application/json') !== -1
    ) {
      return await response.json()
    }
    return await response.text()
  }
  
  static normalizedOptions(options) {
    let normalized = options

    if (options.body) {
      normalized.body = JSON.stringify(options.body)
    }

    return normalized
  }

  static async fetch(url, options) {
    const normalizedOptions = this.normalizedOptions(options)
    const response = await this.getRequest(url, normalizedOptions)
    return await this.parseResponse(response)
  }

  static cancelable(url, options) {
    const normalizedOptions = this.normalizedOptions(options)
    const request = this.getRequest(url, options)
    const prom = request.then((response) => this.parseResponse(response))

    // Bind abort to a function on the promise, allowing us to cancel the request
    prom.cancel = () => {
      request.controller.abort()
    }
    return prom
  }
}
