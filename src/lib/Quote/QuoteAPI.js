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

const BASE_URL = 'https://auth0-exercise-quotes-api.herokuapp.com/api';

export async function getAll(params?: QuotePagination): Promise<QuoteResponse> {
  return await EasyFetch.fetch(`${BASE_URL}/quotes`, { params })
}

export function search(params: QuoteParams = {}): CancelablePromise<QuoteResponse> {
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

