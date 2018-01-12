function forLoop(array) {
  for (let i = 1; i < 26; i++) {
    array.push(`I am ${i} strange loop`);
  }
  return array;
}

function whileLoop(n) {
  while (n >= 0) {
    console.log(n);
    number--;
  }
  return "done";
}