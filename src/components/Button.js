import React from 'react'
import styled from 'styled-components'

const ButtonComponent = styled.button`
  ${(props) => (props.disabled ? 'filter: grayscale(1)' : '')};
`

export default function Button({ children, primary, ...props }) {
  let { className = '' } = props
  className += ` button ${primary && 'button-primary'}`
  return (
    <ButtonComponent
      {...props}
      className={className}
    >
      {children}
    </ButtonComponent>
  )
}
