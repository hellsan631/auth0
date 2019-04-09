import React from 'react'
import styled from 'styled-components'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { toast } from 'react-toastify'

const getRandomGradient = (id) => {
  const grads = [
    // 'linear-gradient( 135deg, #3C8CE7 10%, #00EAFF 100%)',
    'linear-gradient( 135deg, #F97794 10%, #623AA2 100%)',
    // 'linear-gradient( 135deg, #FF9D6C 10%, #BB4E75 100%)',
    // 'linear-gradient( -135deg, #3B2667 10%, #BC78EC 100%)',
    'linear-gradient( 135deg, #97ABFF 10%, #123597 100%)',
    // 'linear-gradient( 135deg, #FD6585 10%, #0D25B9 100%)',
    // 'linear-gradient( 135deg, #FF7AF5 10%, #513162 100%)',
  ];

  return grads[Math.round(id % grads.length)]
}

const QuoteItemContainer = styled.div`
  position: relative;
  padding: 1.5em;
  border-radius: 5px;
  color: #fff;
  background-image: ${({ backgroundImage }) => backgroundImage};
  transition: all cubic-bezier(.47,1.64,.41,.8) 600ms;
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
    transform: scale(1.05);
    &:after {
      opacity: 1;
    }
  }

  &.columns {
    margin: 1em 0;
  }

  blockquote {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
  }
`

export default function QuoteItem({ id, text, authorName, className }) {
  return (
    <CopyToClipboard
      text={`${text} - ${authorName || 'Anonymous'}`}
      onCopy={() => toast.info('Quote copied to clipboard', { autoClose: 2000 })}
    >
      <QuoteItemContainer
        className={className}
        backgroundImage={getRandomGradient(id)}
      >
        <blockquote>"{text}"</blockquote>
        <cite
          className="u-pull-right"
        >
          - {authorName || 'Anonymous'}
        </cite>
      </QuoteItemContainer>
    </CopyToClipboard>

  )
}
