var arr = [4, 1, 6, 9, 3, 2, 8, 7];

function compare(a, b) {
  if (a < b) return true;
  else return false;
}

function exchange(arr, a, b) {
  var temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

// 选择排序,内层循环 每一圈选出一个最大的，然后放在后面
function sort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let maxIndex = 0;
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[maxIndex] < arr[j]) {
        maxIndex = j;
      }
    }
    // 最大的和最后一个进行交换
    // -i 表示 之前那个最大值不用进行交换了
    exchange(arr, maxIndex, arr.length - 1 - i);
  }
}

sort(arr);
console.log(arr);
