const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    const addNode = (node, data) => {
      if (!node) return new Node(data);

      if (node.data === data) return node;

      node.data < data
        ? (node.right = addNode(node.right, data))
        : (node.left = addNode(node.left, data));

      return node;
    };

    this.rootNode = addNode(this.rootNode, data);
  }

  has(data) {
    const hasNode = (node, data) => {
      if (!node) return false;

      if (node.data === data) return true;

      return data < node.data ? hasNode(node.left, data) : hasNode(node.right, data);
    };

    return hasNode(this.rootNode, data);
  }

  find(data) {
    const findNode = (node, data) => {
      if (!node) return null;
      if (node.data === data) return node;

      if (data < node.data) {
        return findNode(node.left, data);
      } else {
        return findNode(node.right, data);
      }
    };

    return findNode(this.rootNode, data);
  }

  remove(data) {
    const deleteNode = (node, data) => {
      if (!node) return null;

      if (data < node.data) {
        node.left = deleteNode(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = deleteNode(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }

        if (!node.left) {
          node = node.right;
          return node;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }

        let minRight = node.right;
        while (minRight.left) {
          minRight = minRight.left;
        }

        node.data = minRight.data;
        node.right = deleteNode(node.right, minRight.data);
        return node;
      }
    };

    this.data = deleteNode(this.rootNode, data);
  }

  min() {
    const findMin = (node) => {
      if (!node) return null;

      while (node.left) {
        node = node.left;
      }

      return node.data;
    };

    return findMin(this.rootNode);
  }

  max() {
    const findMax = (node) => {
      if (!node) return null;

      while (node.right) {
        node = node.right;
      }

      return node.data;
    };

    return findMax(this.rootNode);
  }
}

module.exports = {
  BinarySearchTree,
};
