var pointSet = [];
var max = 1e9;
var distance = [
  [0, 4, 7, max, max],
  [4, 0, 8, 6, max],
  [7, 8, 0, 5, max],
  [max, 6, 5, 0, 7],
  [max, max, max, 7, 0],
];
var a = new Node("A");
var b = new Node("B");
var c = new Node("C");
var d = new Node("D");
var e = new Node("E");
pointSet.push(a);
pointSet.push(b);
pointSet.push(c);
pointSet.push(d);
pointSet.push(e);

function Node(value) {
  this.value = value;
  this.neighbor = [];
}
function getIndex(start) {
  for (let i = 0; i < pointSet.length; i++) {
    if (pointSet[i].value === start) {
      return i;
    }
  }
  return -1;
}

// 需要传入点的集合，边的集合，当前已经连接的点的集合
// 此方法，根据当前已经连接的点的集合，获取到最小代价的边
function getMinDisNode(pointSet, distance, nowPointSet) {
  // 线段的起点
  var fromNode = null;
  // 线段的终点
  var minDisNode = null;
  var minDis = max;
  // 根据当前已经连接的点的集合，依次判断连接其他的点的距离是多少
  for (let i = 0; i < nowPointSet.length; i++) {
    var newPoint = getIndex(nowPointSet[i].value);
    for (let j = 0; j < distance[newPoint].length; j++) {
      var thisNode = pointSet[j];
      if (!nowPointSet.includes(thisNode) && distance[newPoint][j] < minDis) {
        minDis = distance[newPoint][j];
        fromNode = nowPointSet[i];
        minDisNode = thisNode;
      }
    }
  }
  fromNode.neighbor.push(minDisNode);
  minDisNode.neighbor.push(fromNode);
  return minDisNode;
}
function prim(pointSet, distance, start) {
  var nowPointSet = [];
  nowPointSet.push(start);
  // 获取最小代价的边
  while (true) {
    var minDisNode = getMinDisNode(pointSet, distance, nowPointSet);
    nowPointSet.push(minDisNode);
    if (nowPointSet.length === pointSet.length) {
      break;
    }
  }
  console.log(nowPointSet);
}

prim(pointSet, distance, pointSet[2]);
