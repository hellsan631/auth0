export default class EasyFetch {
  static addQueryStringToUrl(url, params) {
    let queryString = ''
    for (let key in params) {
      if (params.hasOwnProperty(key)) {
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

  static async fetch(url, options) {
    const response = await this.getRequest(url, options)
    return await this.parseResponse(response)
  }

  static cancelable(url, options) {
    const request = this.getRequest(url, options)
    const prom = request.then((response) => this.parseResponse(response))
    prom.cancel = () => {
      request.controller.abort()
    }
    return prom
  }
}
