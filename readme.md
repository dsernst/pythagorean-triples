# pythagorean-triples

## Install

```js
var triples = require('pythagorean-triples');
```

## Usage

### triples.seed(m, n)

Uses [Euclid's formula](https://en.wikipedia.org/wiki/Pythagorean_triple#Generating_a_triple) `a = m^2 - n^2, b = 2mn, c = m^2 + n^2` to generate a triple.

```js
console.log(triples.seed(2, 1)) // [3, 4, 5]
console.log(pythagoreanTriples(3, 2)) // [5, 12, 13]
```

