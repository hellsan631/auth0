// @flow

export type QuotePost = {
  authorName: string,
  text: string,
  userId?: string,
}

export type Quote = QuotePost & {
  id: number,
}

export type QuotePagination = {
  page?: number,
  pageSize?: number,
}

export type QuoteParams = QuotePagnation & {
  authorName?: string,
  text?: string,
  sortBy?: string,
}

export type QuoteResponse = {
  results: Array<Quote>, // matched results per query
  // Removed when abstraction was placed in
  // pagination: {
  //   page: number, // returned `page` number of request
  //   pageSize: number, // returned `pageSize` of the request
  //   pageCount: number, // total count of pages for query
  //   rowCount: number, // total number of rows (elements) for query
  // },
}
