function fib() {
  const fibArray = [0, 1];
  for (let i = 2; i < 50; i++) {
    fibArray.push(fibArray[i - 1] + fibArray[i - 2]);
  }
  return fibArray;
}
console.log(fib());

function numsToStrings(list) {
  return _.map(list, function (num) { return String(num); });
}
console.log(numsToStrings(fib()));

function numEvenNums(list) {
  return (_.filter(list, function (num) { return num % 2 === 0; })).length;
}
console.log(numEvenNums(fib()));
