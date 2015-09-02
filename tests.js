var triples = require('./index.js');

console.log(triples.euclid(2, 1)); // [3, 4, 5]
console.log(triples.euclid(3, 2)); // [5, 12, 13]
console.log(exports.euclid(0, 1)); // throw TypeError('m and n must not be less than 1')
console.log(exports.euclid(2, 2)); // throw TypeError('m must not equal n')
