function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

var a = new Node("A");
var b = new Node("B");
var c = new Node("C");
var d = new Node("D");
var e = new Node("E");
var f = new Node("F");
var g = new Node("G");

a.left = c;
a.right = b;

c.left = f;
c.right = g;

b.left = d;
b.right = e;

function f1(root) {
  if (root === null) return;
  f1(root.left);
  f1(root.right);
  console.log(root.value);
}

f1(a);
