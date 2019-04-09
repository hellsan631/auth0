// @flow

import { useState } from 'react'

type DispatchProps = {
  type: string,
  payload: any,
  onSuccess: Function,
  onError: Function
}

type ReducerProps = {
  state: any,
  loading: boolean,
  dispatch: Function,
}

function useAsyncReducer(
    asyncFn: Function,
    initialState: any,
): ReducerProps {
  const [loading, setLoading] = useState(false)
  const [state, setState] = useState(initialState)

  const dispatch = async (
    { 
      onSuccess,
      onError = (err) => console.log(err),
      ...props,
    }: DispatchProps
  ) => {
    setLoading(true)
    try {
      const results = await asyncFn(state, props)
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
