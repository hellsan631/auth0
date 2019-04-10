export const FakeQuotes = []

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

export const getFakeQuote = () => {
  return FakeQuotes[Math.round(Math.random() * (FakeQuotes.length - 1))]
}
