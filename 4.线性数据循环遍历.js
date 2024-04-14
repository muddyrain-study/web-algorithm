var arr = [1, 2, 3, 4, 5, 6];

function bian(arr) {
  if (arr?.length === 0) return;
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function Node(value) {
  this.value = value;
  this.next = null;
}

const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);
const node5 = new Node(5);
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
function bianLink(root) {
  if (!root) return;
  var temp = root;
  while (true) {
    if (temp != null) {
      console.log(temp.value);
    } else {
      break;
    }
    temp = temp.next;
  }
}
bianLink(node1);
