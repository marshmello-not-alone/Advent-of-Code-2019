import { assert, readInput } from './utils'
import { a, b } from './day1'

const input = readInput(1)

describe('day 1', () => {
  it('solves a', () => {
    assert.equal(a('1969'), 654)
    assert.equal(a(input), 3423511)
  })

  it('solves b', () => {
    assert.equal(b('1969'), 966)
    assert.equal(b(input), 5132379)
  })
})
