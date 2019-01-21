/**
 * Replace occurrences in a string.
 *
 * @param {string} string - eg: 'My name is #{surname}, #{name} #{surname}.'
 * @param {object} occurrences - eg: { name: 'james', surname: 'bond' }
 * @param {object} delimiters
 * @param {string} delimiters.start - eg: '#{'
 * @param {string} delimites.end - eg: '}'
 * @param {boolean} caseSensitive
 * @returns {string} - eg: 'My name is bond, james bond.'
 */
const replaceOccurrences = (
  string,
  occurrences,
  delimiters = { start: '{{', end: '}}' },
  caseSensitive = false
) =>
  Object
    .entries(occurrences)
    .reduce(
      (memo, [key, value]) => memo.replace(RegExp(`${delimiters.start}${key}${delimiters.end}`, caseSensitive ? 'g' : 'gi'), value),
      string
    )

module.exports = replaceOccurrences
