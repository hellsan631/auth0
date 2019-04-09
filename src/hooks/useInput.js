import { useState } from 'react'

export default function useInput(defaultValue) {
  const [state, setState] = useState(defaultValue)

  const handleInputChange = ({ target: { value } }) => {
    setState(value)
  }

  return [state, handleInputChange, setState]
}