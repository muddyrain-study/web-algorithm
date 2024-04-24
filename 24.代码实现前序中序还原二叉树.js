var qian = ["a", "c", "f", "g", "b", "d", "e"];
var zhong = ["f", "c", "g", "a", "d", "b", "e"];

function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function f1(qian, zhong) {
  if (
    qian === null ||
    zhong === null ||
    qian.length === 0 ||
    zhong.length === 0 ||
    qian.length !== zhong.length
  ) {
    return;
  }
  var root = new Node(qian[0]);
  // 找到根节点在中序遍历的位置
  var index = zhong.indexOf(root.value);
  var qianLeft = qian.slice(1, index + 1);
  var qianRight = qian.slice(index + 1);
  var zhongLeft = zhong.slice(0, index);
  var zhongRight = zhong.slice(index + 1);
  root.left = f1(qianLeft, zhongLeft);
  root.right = f1(qianRight, zhongRight);
  return root;
}

console.log(f1(qian, zhong));
