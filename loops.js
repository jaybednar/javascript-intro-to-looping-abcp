function forLoop(array) {
  for (let i = 1; i < 26; i++) {
    array.push(`I am ${i} strange loop`);
  }
  return array;
}

function whileLoop(n) {
  while (n > 0) {
    console.log(n);
    n--;
  }
  return "done";
}

function doWhileLoop(array) {
  return Math.random() >= 0.5;
  do {
  console.log('doo-bee-doo-bee-doo')
} while (maybeTrue());
}