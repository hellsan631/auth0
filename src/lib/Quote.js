// @flow

import type {
  QuotePagination,
  QuoteResponse,
  QuoteParams,
  Quote,
} from './Quote.types'
import EasyFetch from './EasyFetch'

const BASE_URL = 'https://auth0-exercise-quotes-api.herokuapp.com/api';

export async function getAll(pagination?: QuotePagination): Promise<QuoteResponse> {
  return await EasyFetch.fetch(`${BASE_URL}/quotes`, { params: pagination })
}

export async function search(params: QuoteParams = {}): Promise<QuoteResponse> {
  if (Object.keys(params).length === 0) {
    throw new Error('Search Requires At Least One Parameter')
  }
  return await EasyFetch.fetch(`${BASE_URL}/quotes`, { params })
}

export async function getQuote(quoteId: string): Promise<Quote> {
  if (!quoteId) {
    throw new Error('Quote ID Required')
  }
  return await EasyFetch.fetch(`${BASE_URL}/quotes/${quoteId}`)
}
