import { getAll, search, getQuote } from './Quote'

it('getAll', async () => {
  const { results } = await getAll()
  expect(results.length).toBeGreaterThan(0)
})

it('search', async () => {
  const { results } = await search({ authorName: 'albert' })
  expect(results.length).toBeGreaterThan(0)
  expect(results[0].authorName).toContain('Albert')
})

it('getQuote', async () => {
  const { id, authorName } = await getQuote(3642)
  expect(id).toEqual(3642)
  expect(authorName).toEqual('Albert Camus')
})
