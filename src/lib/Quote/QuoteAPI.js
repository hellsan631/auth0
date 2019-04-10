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

export type CancelablePromise = Promise & {
  cancel: Function,
}

const BASE_URL = 'https://hellsan631.api.stdlib.com/quotes@dev/';

export function search(params: QuoteParams = {}): CancelablePromise<QuoteResponse> {
  if (Object.keys(params).length === 0) {
    throw new Error('Search Requires At Least One Parameter')
  }
  return EasyFetch.cancelable(`${BASE_URL}`, { params })
}

export async function addQuote(quoteParams: QuotePost): Promise<Quote> {
  if (!quoteParams.text) {
    throw new Error('Quote Text Required')
  }
  if (!quoteParams.authorName) {
    quoteParams.authorName = ''
  }

  const id = Date.now()

  return {
    id,
    ...quoteParams,
  }
}

