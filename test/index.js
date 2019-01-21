/* eslint-env mocha */

const { expect } = require('chai')

const replaceOccurrences = require('..')

describe('#replaceOccurrences()', () => {
  it('should replace an occurrence in a string', () => {
    const string = 'My name is {{name}}.'
    const occurrences = { name: 'james' }

    const expected = 'My name is james.'
    const result = replaceOccurrences(string, occurrences)

    expect(result).to.equal(expected)
  })

  it('should replace occurrences in a string', () => {
    const string = 'My name is {{name}} {{surname}}.'
    const occurrences = { name: 'james', surname: 'bond' }

    const expected = 'My name is james bond.'
    const result = replaceOccurrences(string, occurrences)

    expect(result).to.equal(expected)
  })

  it('should replace duplicated occurrences in a string', () => {
    const string = 'My name is {{surname}}, I repeat, {{surname}}.'
    const occurrences = { surname: 'bond' }

    const expected = 'My name is bond, I repeat, bond.'
    const result = replaceOccurrences(string, occurrences)

    expect(result).to.equal(expected)
  })

  it('should replace multiple occurrences in a string', () => {
    const string = 'My name is {{surname}}, {{name}} {{surname}}.'
    const occurrences = { name: 'james', surname: 'bond' }

    const expected = 'My name is bond, james bond.'
    const result = replaceOccurrences(string, occurrences)

    expect(result).to.equal(expected)
  })

  it('should replace occurrences in a string with custom delimiters', () => {
    const string = 'My name is #{name} #{surname}.'
    const occurrences = { name: 'james', surname: 'bond' }
    const delimiters = { start: '#{', end: '}' }

    const expected = 'My name is james bond.'
    const result = replaceOccurrences(string, occurrences, delimiters)

    expect(result).to.equal(expected)
  })

  it('should replace occurrences in a string without case sensitivity by default', () => {
    const string = 'My name is {{Name}} {{surname}}.'
    const occurrences = { Name: 'james', Surname: 'bond' }

    const expected = 'My name is james bond.'
    const result = replaceOccurrences(string, occurrences)

    expect(result).to.equal(expected)
  })

  it('should replace occurrences in a string with case sensitivity', () => {
    const string = 'My name is {{Name}} {{surname}}.'
    const occurrences = { Name: 'james', Surname: 'bond' }
    const caseSensitive = true

    const expected = 'My name is james {{surname}}.'
    const result = replaceOccurrences(string, occurrences, undefined, caseSensitive)

    expect(result).to.equal(expected)
  })
})
