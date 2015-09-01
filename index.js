exports.seed = function (m, n) {
  var a = Math.abs(m * m - n * n);
  var b = 2 * m * n;
  var c = m * m + n * n;
  return [a, b, c];
};
