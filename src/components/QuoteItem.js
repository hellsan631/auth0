import React from 'react'
import styled from 'styled-components'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { toast } from 'react-toastify'
import QuoteItemContainer from './QuoteItemContainer'

const getRandomGradient = (id) => {
  const grads = [
    'linear-gradient( 135deg, #97ABFF -10%, #123597 140%)',
    'linear-gradient( 315deg, #F97794 -60%, #623AA2 80%)',
  ];

  return grads[Math.round(id % grads.length)]
}

export default function QuoteItem({ id, text, authorName, className, index }) {
  return (
    <CopyToClipboard
      text={`${text} - ${authorName || 'Anonymous'}`}
      onCopy={() => toast.info('Quote copied to clipboard', { autoClose: 2000 })}
    >
      <QuoteItemContainer
        className={className}
        backgroundImage={getRandomGradient(typeof index === 'number' ? index : id)}
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
