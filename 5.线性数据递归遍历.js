var arr = [1, 2, 3, 4, 5, 6];

function bian(arr, i) {
  // if (arr?.length === 0) return;
  // for (let i = 0; i < arr.length; i++) {
  //   console.log(arr[i]);
  // }
  if (arr === null || arr.length <= i) return;
  console.log(arr[i]);
  bian(arr, i + 1);
}
bian(arr, 0);

function Node(value) {
  this.value = value;
  this.next = null;
}

var node1 = new Node(1);
var node2 = new Node(2);
var node3 = new Node(3);
var node4 = new Node(4);
var node5 = new Node(5);
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

function bianNode(root) {
  // var temp = root;
  //
  // while (true) {
  //   if (temp === null) break;
  //   console.log(temp.value);
  //   temp = temp.next;
  // }

  if (root === null) return;
  console.log(root.value);
  bianNode(root.next);
}
bianNode(node1);
