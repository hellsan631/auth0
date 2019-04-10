import React from 'react'
import useInput from '../hooks/useInput'
import Button from './Button'

const FakeQuotes = []

const addFakeQuote = (text, authorName) => {
  FakeQuotes.push({ text, authorName })
}

addFakeQuote(
    'They made the videogame before I learned how to skate, so I was basically forced into doing it.',
    'Tony Hawk, Probably',
)

addFakeQuote(
    'There is no iron in the iron you use to iron your shirts. Which is ironically, both ironic and un-ironic.',
    'Jeremy Irons, Probably',
)

addFakeQuote(
    `Don't fake the funk on a nasty dunk.`,
    'John Adams, Probably',
)

addFakeQuote(
    `When you think of Tim McGraw, I hope you think of me.`,
    'Winston Churchill, Probably',
)

const getFakeQuote = () => {
  return FakeQuotes[Math.round(Math.random() * (FakeQuotes.length - 1))]
}

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
