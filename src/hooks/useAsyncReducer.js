// @flow

import { useState } from 'react'

type DispatchProps = {
  type: string,
  payload: any,
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

  const dispatch = async (props: DispatchProps) => {
    setLoading(true)
    try {
      setState(await asyncFn(state, props))
    } catch (err) {
      console.log(err)
    }
    setLoading(false)
  }

  return { state, loading, dispatch }
}

export default useAsyncReducer
