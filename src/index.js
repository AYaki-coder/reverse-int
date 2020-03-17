module.exports = function reverse (n) {
  let k = Math.abs(n);
  console.log(k, n);

 return Number(String(k).split('').reverse().join(''));

}
