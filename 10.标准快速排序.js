var arr = [4, 1, 6, 9, 3, 2, 8, 7];

function exchange(arr, a, b) {
  var temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}
function quickSort(arr, begin, end) {
  if (begin >= end - 1) {
    return;
  }
  var left = begin;
  var right = end;
  // 1.左指针小于右指针才可以进行遍历
  do {
    // 2.左指针要不断向后+1，除非左指针大于右指针才可以停止
    // 3.左指针的数据要小于起始点数据
    do {
      left++;
    } while (left < right && arr[left] < arr[begin]);
    // 2.右指针要不断向后-1，除非右指针小于左指针才可以停止
    // 3.右指针的数据要大于起始点数据
    do {
      right--;
    } while (right > left && arr[right] > arr[begin]);
    // 4.如果遍历停止了 左指针小于右指针那么 交换数据
    if (left < right) {
      exchange(arr, left, right);
    }
  } while (left < right);
  // 5.起始点数据归于数据左右的中心
  const point = left - 1;
  exchange(arr, point, begin);
  // 6. 左右个数据进行排序
  quickSort(arr, begin, point);
  quickSort(arr, point + 1, end);
}

quickSort(arr, 0, arr.length);
console.log(arr);
