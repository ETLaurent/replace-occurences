# Replaces Occurrences

## What the f*** is this?

Just some code I wanted to keep.

## How to use this sh**?

Honestly, use `String.prototype.replace()` if you just need to replace few occurrences.

But...

You can do this:

```js
const replaceOccurrences = require('replace-occurrences')

const string = 'My name is {{surname}}, {{name}} {{surname}}.'
const name = 'James'
const surname = 'Bond'

const result = replaceOccurrences(string, { name, surname })) // 'My name is Bond, James Bond.'

// instead of:

const result = string
  .replace(/\{\{name\}\}/g, name)
  .replace(/\{\{surname\}\}/g, surname)
```

## TODO:

- put it in the String prototype?
