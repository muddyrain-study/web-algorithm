var arr = [4, 1, 6, 9, 3, 2, 8, 7];

function sort(arr) {
  for (let a = 0; a < arr.length; a++) {
    for (let i = 0; i < arr.length - 1 - a; i++) {
      if (arr[i] > arr[i + 1]) {
        const temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
  }
}

sort(arr);
console.log(arr);
