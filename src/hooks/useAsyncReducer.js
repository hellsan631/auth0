import { useState } from 'react'
import useLocalStorage from 'react-use/lib/useLocalStorage'

// type DispatchProps = {
//   type: string,
//   payload: any,
//   onSuccess: Function,
//   onError: Function,
// }

// type ReducerProps = {
//   state: any,
//   loading: boolean,
//   dispatch: Function,
// }

function useAsyncReducer(
    reducerFn,
    initialState,
    key,
) {
  const [loading, setLoading] = useState(false)
  const [state, setState] = useLocalStorage(initialState, key)
  if (!key || typeof reducerFn !== 'function') {
    // console.log(key, reducerFn)
    throw new Error('Mismatched Parameters')
  }

  const dispatch = async ({
    onSuccess,
    onError = (err) => console.error(err),
    ...props
  }) => {
    setLoading(true)
    try {
      const results = await reducerFn(state, props)
      setState(results)
      if (onSuccess) {
        onSuccess(results)
      }
    } catch (err) {
      if (onError) {
        onError(err)
      }
    }
    setLoading(false)
  }

  return { state, loading, dispatch }
}

export default useAsyncReducer
