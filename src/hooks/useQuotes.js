import { useEffect, useMemo } from 'react'
import promiseResource from './promiseResource'
import QuoteDatabase from '../lib/Quote/QuoteDatabase'

export default function useQuotes(params, page) {
  const uid = `get-quotes-${JSON.stringify(params)}-${page}`
  const searchPromise = useMemo(() => {
    return async () => await QuoteDatabase.search({ ...params, page })
  }, [])

  const [{ results }, resource] = promiseResource(
      searchPromise,
      uid,
  )

  useEffect(() => {
    return () => resource.cleanup()
  }, [])

  return results
}
