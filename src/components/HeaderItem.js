import styled, { css } from 'styled-components'
import React from 'react'
import { Link } from 'react-router-dom'

const isActive = css`
  border-bottom: 1px solid rgba(0,0,0,0.4);
`

const isNotActive = css`
`

const HeaderItemContainer = styled.div`
  float: left;
  padding: 1em;
  cursor: pointer;

  &:hover {
    border-bottom: 1px solid rgba(0,0,0,0.2);
  }

  ${(props) => (props.isActive ? isActive : isNotActive)};
`

export default function HeaderItem({ title, path, isActive }) {
  return (
    <Link to={path}>
      <HeaderItemContainer
        isActive={isActive}
      >
        {title}
      </HeaderItemContainer>
    </Link>
  )
}
