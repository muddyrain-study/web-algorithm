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
let sum = 0;
function nizhi(root) {
  // 出口
  if (!root.next) {
    return root;
  } else {
    const result = nizhi(root.next);
    root.next.next = root;
    root.next = null;
    return result;
  }
}
const newRoot = nizhi(node1);
function bian(root) {
  if (root === null) return;
  console.log(root.value);
  bian(root.next);
}
bian(newRoot);
