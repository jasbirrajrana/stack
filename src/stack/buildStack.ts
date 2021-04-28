class Node {
  value: any;
  next: any;
  constructor(value: any) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  first: any;
  last: any;
  length: number;
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  push(element: any) {
    let newNode = new Node(element);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let temp = this.first; //store this.first in temp
      this.first = newNode; //make upper node as first node
      newNode.next = temp; // node.next=>down node as last node
    }
    this.length++;
  }
  pop() {
    if (this.length === 0) return null;
    let removedNode = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.length--;
    return removedNode.value;
  }
  // return the top element of the stack
  peek() {
    let x;
    if (this.length === 0) return null;
    else {
      x = this.first.value;
    }
    return x;
  }
  isEmpty() {
    return this.length <= 0;
  }
}

export { Node, Stack };
