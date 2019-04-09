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
  static search(params: QuoteParams, userAuth?: UserAuth): CancelablePromise<QuoteResponse> {
    if (userAuth && params.page === 0) {
      return this.getByUserId(params, userAuth)
    }

    return search(params)
  }

  static async getByUserId(params: QuoteParams, { userId }: UserAuth): Promise<QuoteResponse> {
    const userData = await Manager.getUser(userId)
    console.log(userData)
    return []
  }

  static async add(quote: QuotePost, userAuth: UserAuth): Promise<Quote> {

  }

  static async update(updates: QuotePost, userAuth: UserAuth): Promise<Quote> {

  }

  static async remove(quoteId: number, userAuth: UserAuth): Promise<Quote> {

  }
}
