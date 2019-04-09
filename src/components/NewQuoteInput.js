import React from 'react'
import useInput from '../hooks/useInput'
import Button from '../components/Button'

export default function NewQuoteInput({ disabled, onSubmit }) {
  const [text, handleTextChange] = useInput('')
  const [authorName, handleAuthorName] = useInput('')

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
          placeholder="Funny"
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
          placeholder="Someone, Probably"
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
          Add Quote
        </Button>
      </div>
    </div>
  )
}
