# pythagorean-triples

## Install

```js
var triples = require('pythagorean-triples');
```

## Usage

### triples.euclid(m, n)

Generates a Pythagorean triple, using [Euclid's formula](https://en.wikipedia.org/wiki/Pythagorean_triple#Generating_a_triple) `a = m^2 - n^2, b = 2mn, c = m^2 + n^2`.

The returned triple is sorted numerically `a < b < c`.

```js
console.log(triples.euclid(2, 1)); // [3, 4, 5]
console.log(triples.euclid(3, 2)); // [5, 12, 13]
```

### triples.upToM(m)

Generates all the triples for integers `m` and `n` where `1 <= n < m`.

```js
console.log(triples.upToM(4));
```

```js
[ [ 3, 4, 5 ],
  [ 6, 8, 10 ],
  [ 5, 12, 13 ],
  [ 8, 15, 17 ],
  [ 12, 16, 20 ],
  [ 7, 24, 25 ] ]
```
