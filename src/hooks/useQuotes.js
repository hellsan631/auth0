import { useEffect, useState, useMemo } from 'react'
import { search } from '../lib/Quote'
import EasyFetch from '../lib/EasyFetch'
import cancelableResource from './cancelableResource'

export function useSearchQuotes(params) {
  const uid = `get-search-quotes-${JSON.stringify(params)}`
  const [quotes, setQuotes] = useState(false)
  const searchPromise = useMemo(() => {
    return search(params)
  }, [params])

  const [promise, resource] = cancelableResource(
      searchPromise,
      uid,
  )

  useEffect(() => {
    return () => resource.cleanup()
  }, [params])

  promise
      .then(({ results }) => {
        setQuotes(results)
      })
      .catch((error) => {
        if (error.message !== 'The user aborted a request.') {
          throw error
        }
      })

  return { quotes, resource }
}
