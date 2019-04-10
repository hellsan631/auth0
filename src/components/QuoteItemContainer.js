import styled from 'styled-components'

export const QuoteEdit = styled.div`
  position: absolute;
  bottom: 0.5em;
  left: 3.5em;
  padding: 0.5em;
  border-radius: 5px;
  background: rgba(0,0,0,0.5);
  z-index: 10;
  transition: all cubic-bezier(.47,1.64,.41,.8) 400ms;
`

export const QuoteDelete = styled.div`
  position: absolute;
  bottom: 0.5em;
  left: 0.5em;
  padding: 0.5em;
  border-radius: 5px;
  background: rgba(0,0,0,0.5);
  z-index: 10;
  transition: all cubic-bezier(.47,1.64,.41,.8) 400ms;
`

const QuoteItemContainer = styled.div`
  position: relative;
  padding: 1.5em 1.4em;
  border-radius: 5px;
  color: #fff;
  background-image: ${({ backgroundImage }) => backgroundImage};
  transition: all cubic-bezier(.47,1.64,.41,.8) 400ms;
  box-shadow: 0 1px 5px rgba(0,0,0,0.15);
  cursor: pointer;
  
  &::after {
    content: '';
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    border-radius: 5px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.3);
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  &:hover {
    transform: scale(1.044);
    &:after {
      opacity: 1;
    }
    blockquote {
      transform: scale(0.982);
    }

    ${QuoteDelete} {
      left: 1.75em;
      bottom: 0.53em;
      transform: scale(0.956);
    }

    ${QuoteEdit} {
      left: 4.75em;
      bottom: 0.53em;
      transform: scale(0.956);
    }
  }

  &.columns {
    margin: 1em 0;
  }

  blockquote {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    font-smoothing: antialiased !important;
    transition: all cubic-bezier(.47,1.64,.41,.8) 400ms;
  }
`

export default QuoteItemContainer
