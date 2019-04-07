import React from 'react'
import styled from 'styled-components'

const ButtonComponent = styled.div`
`

export default function Button({ children, ...props }) {
  let { className = '' } = props
  className += ' button button-primary'
  return (
    <ButtonComponent
      {...props}
      className={className}
    >
      {children}
    </ButtonComponent>
  )
}
