import { useEffect } from 'react'
import promiseResource from './promiseResource'
import { search } from '../lib/Quote'

export function useSearchQuotes(params) {
  const uid = `get-search-quotes-${JSON.stringify(params)}`
  const promise = async () => {
    return await search(params)
  }

  const [{ results }, resource] = promiseResource(
      promise,
      uid,
  )

  useEffect(() => {
    return () => resource.cleanup()
  }, [params])

  return results
}
