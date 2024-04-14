const arr = [4, 1, 6, 9, 3, 2, 8, 7];

function quickSort(arr) {
  if (arr === null || arr.length === 0) {
    return arr;
  }
  // 选班长
  var leader = arr[0];
  // 小的占左边
  var left = [];
  // 大的占右边
  var right = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < leader) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  // 再次排序 左侧
  left = quickSort(left);
  // 再次排序 右侧
  right = quickSort(right);
  return left.concat([leader]).concat(right);
}

console.log(quickSort(arr));
