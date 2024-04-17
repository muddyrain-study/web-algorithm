/**
 * 二叉树的遍历
 * 前序遍历: 先访问根节点，再访问左子树，最后访问右子树
 * 中序遍历: 先访问左子树，再访问根节点，最后访问右子树
 * 后序遍历: 先访问左子树，再访问右子树，最后访问根节点
 *      A
 *      /\
 *     C  B
 *    /\  /\
 *    F G D E
 *    前序遍历: A C F G B D E
 *    中序遍历: F C G A D B E
 *    后序遍历: F G C D E B A
 *
 */

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
