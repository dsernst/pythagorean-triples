# pythagorean-triples

[![NPM Version](https://img.shields.io/npm/v/pythagorean-triples.svg)](https://www.npmjs.com/package/pythagorean-triples)
[![Build Status](https://travis-ci.org/dsernst/pythagorean-triples.svg?branch=master)](https://travis-ci.org/dsernst/pythagorean-triples)

## Install

```
$ npm install pythagorean-triples
```

```js
var triples = require('pythagorean-triples');
```

## Usage

### triples.euclid(m, n)

Generates a Pythagorean triple, using [Euclid's formula](https://en.wikipedia.org/wiki/Pythagorean_triple#Generating_a_triple) `a = m^2 - n^2, b = 2mn, c = m^2 + n^2`.

The triple is sorted numerically `a < b < c`.

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
[
  [ 3, 4, 5 ],
  [ 6, 8, 10 ],
  [ 5, 12, 13 ],
  [ 8, 15, 17 ],
  [ 12, 16, 20 ],
  [ 7, 24, 25 ]
]
```

### triples.upToSum(sum)

Generates all the triples where `a + b + c <= sum`.

```js
console.log(triples.upToSum(35))
```

```js
[
  [ 3, 4, 5 ],
  [ 6, 8, 10 ],
  [ 5, 12, 13 ],
]
```

### triples.isPrimitive(triple)

Checks if a given triple is primitive. A triple is primitive if all values are [coprime](https://en.wikipedia.org/wiki/Coprime_integers), which means their greatest common divisor is 1.

```js
console.log(triples.isPrimitive([3, 4, 5]); //true
console.log(triples.isPrimitive([6, 8, 10]); // false
```

## Tests

To run the test suite, first install the dependencies, then run `npm test`:

```
$ npm install
$ npm test
```
