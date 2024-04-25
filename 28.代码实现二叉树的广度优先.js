function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

var a = new Node("a");
var b = new Node("b");
var c = new Node("c");
var d = new Node("d");
var e = new Node("e");
var f = new Node("f");
var g = new Node("g");

a.left = c;
c.left = f;
c.right = g;
a.right = b;
b.left = d;
b.right = e;

function guangSearch(rootList, target) {
  if (rootList === null || rootList.length === 0) return false;
  var childList = [];
  for (let i = 0; i < rootList.length; i++) {
    if (rootList[i] !== null && rootList[i].value === target) {
      return true;
    } else {
      rootList[i].left && childList.push(rootList[i].left);
      rootList[i].right && childList.push(rootList[i].right);
      // return guangSearch([rootList[i].left, rootList[i].right], target);
    }
  }
  return guangSearch(childList, target);
}

console.log(guangSearch([a.left, a.right], "g"));
