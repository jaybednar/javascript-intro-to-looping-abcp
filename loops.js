function forLoop(array) {
  for (let i = 1; i < 26; i++) {
    array.push(`I am ${i} strange loop`);
  }
  return array;
}

function whileLoop(number) {
  while (number >= 0) {
    console.log(number);
    number--;
  }
}