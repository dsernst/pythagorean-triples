/*global describe,it*/

var triples = require('./index.js');
var assert = require('assert');

describe('.euclid method', function () {
  it('uses Euclid\'s formula to generate a triple for given m and n', function () {
    assert.deepEqual(triples.euclid(2, 1), [3, 4, 5]);
    assert.deepEqual(triples.euclid(3, 2), [5, 12, 13]);
  });

  it('checks if the input m & n are below 1', function () {
    assert.throws(triples.euclid.bind(null, 0, 1));
  });

  it('checks if the input m & n are equal', function () {
    assert.throws(triples.euclid.bind(null, 5, 5));
  });

  it('returns a numerically sorted triple', function () {
    assert.deepEqual(triples.euclid(1, 4), [ 8, 15, 17 ]);
    assert.deepEqual(triples.euclid(4, 1), [ 8, 15, 17 ]);
  });
});


describe('.upToM method', function () {
  it('returns an array of triples up to m', function () {
    var expected = [
      [ 3, 4, 5 ],
      [ 6, 8, 10 ],
      [ 5, 12, 13 ],
      [ 8, 15, 17 ],
      [ 12, 16, 20 ],
      [ 7, 24, 25 ]
    ];
    assert.deepEqual(triples.upToM(4), expected);
  });
});
