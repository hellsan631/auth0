// @flow
// Abstraction around the external endpoints of QuotesAPI

import type {
  QuotePagination,
  QuoteResponse,
  QuoteParams,
  QuotePost,
  Quote,
} from './Quote.types'
import EasyFetch from '../EasyFetch'

type SearchPromise = Promise & {
  cancel: Function,
}

const BASE_URL = 'https://auth0-exercise-quotes-api.herokuapp.com/api';

export async function getAll(params?: QuotePagination): Promise<QuoteResponse> {
  return await EasyFetch.fetch(`${BASE_URL}/quotes`, { params })
}

export function search(params: QuoteParams = {}): SearchPromise {
  if (Object.keys(params).length === 0) {
    throw new Error('Search Requires At Least One Parameter')
  }
  return EasyFetch.cancelable(`${BASE_URL}/quotes`, { params })
}

export async function getQuote(quoteId: string): Promise<Quote> {
  if (!quoteId) {
    throw new Error('Quote ID Required')
  }
  return await EasyFetch.fetch(`${BASE_URL}/quotes/${quoteId}`)
}
