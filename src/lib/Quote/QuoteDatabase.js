// @flow
import type {
  QuotePagination,
  QuoteResponse,
  QuoteParams,
  QuotePost,
  Quote,
} from './Quote.types'
import type {
  CancelablePromise,
} from './QuoteAPI'
import { search } from './QuoteAPI'
import Manager from '../auth0/Manager'
import EasyFetch from '../EasyFetch'

const BASE_URL = 'https://hellsan631.api.stdlib.com/quotes@dev'

type UserAuth = {
  userId: string,
}

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
  static search(params: QuoteParams): CancelablePromise<QuoteResponse> {
    if (Object.keys(params).length === 0) {
      throw new Error('Search Requires At Least One Parameter')
    }
    return EasyFetch.cancelable(`${BASE_URL}`, { params })
  }

  static async getByUserId(userId: string): Promise<QuoteResponse> {
    try {
      const params = { userId }
      const userData = await EasyFetch.fetch(`${BASE_URL}/`, { params })
      console.log(userData)
      return {
        results: [],
      }
    } catch (error) {
      console.error(error)
      return {
        results: [],
      }
    }
  }

  static async add(quote: QuotePost): Promise<Quote> {
    try {
      const request = {
        method: 'POST',
        body: { quote },
        headers: { 'Content-Type': 'application/json' },
      }
      const response = await EasyFetch.fetch(`${BASE_URL}/quote/create/`, request)
      console.log(response)
      return {
        results: [],
      }
    } catch (error) {
      console.error(error)
      return {
        results: [],
      }
    }
  }

  static async update(updates: QuotePost, userAuth: UserAuth): Promise<Quote> {

  }

  static async remove(quoteId: number, userAuth: UserAuth): Promise<Quote> {

  }
}
