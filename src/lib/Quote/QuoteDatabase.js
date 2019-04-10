// @flow
import type {
  QuoteResponse,
  QuoteParams,
  QuotePost,
  Quote,
} from './Quote.types'
import EasyFetch from '../EasyFetch'

const BASE_URL = 'https://hellsan631.api.stdlib.com/quotes@0.0.1'

export type CancelablePromise = Promise & {
  cancel: Function,
}

const FakeQuotes = []

const addFakeQuote = (text: string, authorName: string) => {
  FakeQuotes.push({ text, authorName })
}

addFakeQuote(
    'They made the videogame before I learned how to skate, so I was basically forced into doing it.',
    'Tony Hawk, Probably',
)

addFakeQuote(
    'There is no iron in the iron you use to iron your shirts. Which is ironically, both ironic and un-ironic.',
    'Jeremy Irons, Probably',
)

addFakeQuote(
    `Don't fake the funk on a nasty dunk.`,
    'John Adams, Probably',
)

addFakeQuote(
    `When you think of Tim McGraw, I hope you think of me.`,
    'Winston Churchill, Probably',
)

export default class QuoteDatabase {
  static getFakeQuote(): Quote {
    return FakeQuotes[Math.round(Math.random() * (FakeQuotes.length - 1))]
  }
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
      return response
    } catch (error) {
      console.error(error)
      return false
    }
  }

  static async update(updates: QuotePost): Promise<Quote> {
    console.log(updates)
    try {
      const request = {
        method: 'POST',
        body: {
          ...updates,
        },
        headers: { 'Content-Type': 'application/json' },
      }
      const response = await EasyFetch.fetch(`${BASE_URL}/quote/update/`, request)
      console.log(response)
      return response
    } catch (error) {
      console.error(error)
      return false
    }
  }

  static async remove(quoteId: string): Promise<Quote> {
    console.log(quoteId)
    try {
      const request = {
        params: { quoteId },
      }
      const response = await EasyFetch.fetch(`${BASE_URL}/quote/remove/`, request)
      console.log(response)
      return response
    } catch (error) {
      console.error(error)
      return false
    }
  }
}
