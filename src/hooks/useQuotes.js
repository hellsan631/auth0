import { useEffect } from 'react'
import promiseResource from './promiseResource'
import { getAll } from '../lib/Quote'

export function useAllQuotes(params) {
  const uid = `get-all-quotes-${JSON.stringify(params)}`
  const promise = async () => {
    return await getAll(params)
  }

  const [{ results }, resource] = promiseResource(
      promise,
      uid,
  )

  useEffect(() => {
    return () => resource.cleanup()
  }, [])

  return results
}
