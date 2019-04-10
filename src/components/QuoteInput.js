import React from 'react'
import useInput from '../hooks/useInput'
import Button from './Button'
import { getFakeQuote } from '../lib/FakeQuotes'


export default function QuoteInput({
  disabled,
  onSubmit,
  defaultText = '',
  defaultAuthorName = '',
  actionText = 'Add Quote',
}) {
  const [text, handleTextChange] = useInput(defaultText)
  const [authorName, handleAuthorName] = useInput(defaultAuthorName)
  const fakeQuote = getFakeQuote()

  const addClick = () => {
    onSubmit({
      text,
      authorName,
    })
  }

  return (
    <div className="row">
      <div className="twelve columns">
        <label htmlFor="text">Quote Text</label>
        <textarea
          value={text}
          onChange={handleTextChange}
          placeholder={fakeQuote.text}
          id="text"
          className="u-full-width"
        />
      </div>
      <div className="six columns u-pull-right">
        <label htmlFor="authorName">Author's Name</label>
        <input
          type="text"
          value={authorName}
          onChange={handleAuthorName}
          placeholder={fakeQuote.authorName}
          id="authorName"
          className="u-full-width"
        />
      </div>
      <div className="twelve columns">
        <Button
          className="u-pull-right"
          primary
          onClick={addClick}
          disabled={disabled}
        >
          {actionText}
        </Button>
      </div>
    </div>
  )
}
