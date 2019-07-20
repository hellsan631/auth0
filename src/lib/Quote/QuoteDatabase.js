// @flow
// import type {
//   QuoteResponse,
//   QuoteParams,
//   QuotePost,
//   Quote,
// } from './Quote.types'
import EasyFetch from '../EasyFetch'

const BASE_URL = 'https://hellsan631.api.stdlib.com/quotes@0.0.1'

// export type CancelablePromise = Promise & {
//   cancel: Function,
// }

export default class QuoteDatabase {
  /**
   * If user authentication information is provided, and page counter is 0, this will return
   * Results by user id, filtered by parameters.
   *
   * @static
   * @param {QuoteParams} params
   * @param {UserAuth} [userAuth]
   * @return {CancelablePromise<QuoteResponse>}
   * @memberof QuoteDatabase
   */
  static search(params) {
    if (Object.keys(params).length === 0) {
      throw new Error('Search Requires At Least One Parameter')
    }
    return EasyFetch.cancelable(`${BASE_URL}`, { params })
  }

  static async add(quote) {
    try {
      const request = {
        method: 'POST',
        body: { quote },
        headers: { 'Content-Type': 'application/json' },
      }
      const response = await EasyFetch.fetch(`${BASE_URL}/quote/create/`, request)
      return response
    } catch (error) {
      console.error(error)
      return false
    }
  }

  static async update(updates) {
    try {
      const request = {
        method: 'POST',
        body: {
          ...updates,
        },
        headers: { 'Content-Type': 'application/json' },
      }
      const response = await EasyFetch.fetch(`${BASE_URL}/quote/update/`, request)
      return response
    } catch (error) {
      console.error(error)
      return false
    }
  }

  static async remove(quoteId) {
    try {
      const request = {
        params: { quoteId },
      }
      const response = await EasyFetch.fetch(`${BASE_URL}/quote/remove/`, request)
      return response
    } catch (error) {
      console.error(error)
      return false
    }
  }
}
