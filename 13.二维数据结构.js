var arr = new Array(4);

for (let i = 0; i < arr.length; i++) {
  arr[i] = new Array(8);
}

// 二维拓扑结构（邻接矩阵-图）

function Node(value) {
  this.value = value;
  this.neighbor = [];
}

var a = new Node("A");
var b = new Node("B");
var c = new Node("C");
var d = new Node("D");
var e = new Node("E");
var f = new Node("F");

a.neighbor.push(b);
a.neighbor.push(c);
a.neighbor.push(f);
b.neighbor.push(a);
b.neighbor.push(b);
b.neighbor.push(e);
c.neighbor.push(a);
d.neighbor.push(b);
e.neighbor.push(b);
