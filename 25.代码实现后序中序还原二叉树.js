var hou = ["f", "g", "c", "d", "e", "b", "a"];
var zhong = ["f", "c", "g", "a", "d", "b", "e"];

function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function f1(hou, zhong) {
  if (
    hou === null ||
    zhong === null ||
    hou.length === 0 ||
    zhong.length === 0 ||
    hou.length !== zhong.length
  ) {
    return;
  }
  var root = new Node(hou[hou.length - 1]);
  var index = zhong.indexOf(root.value);

  var houLeft = hou.slice(0, index);
  var houRight = hou.slice(index, hou.length - 1);
  var zhongLeft = zhong.slice(0, index);
  var zhongRight = zhong.slice(index + 1);
  root.left = f1(houLeft, zhongLeft);
  root.right = f1(houRight, zhongRight);
  return root;
}

console.log(f1(hou, zhong));
