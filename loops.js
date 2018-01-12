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

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array) {
  Math.random() >= 0.5;
  do {
    array.pop();
  } while (array.length >= 0 && maybeTrue());
}