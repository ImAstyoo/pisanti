// -progettare un algoritmo efficiente per trasformare un array ordinato di n interi distinti, in un ABR che sia il più possibile bilanciato (mediano=radice)
class Node {
    left;
    right;
    key;

    constructor(left, right, key) {
        this.left = left;
        this.right = right;
        this.key = key;
    }
}

let orderedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 19, 20, 21, 22];
let middleValue = orderedArray.length / 2;

function main() {
    let rad = new Node(null, null, middleValue);
    let cursor = 0;
    let sus = genABR(rad, middleValue, cursor);
}

function genABR(node, value, cursor) {
    if (node.key > value) {
        if (node.right == null) return node;
        let rightStep = middleValue + cursor++;
        if (rightStep <= orderedArray.length) {
            node.right = genABR(node.right, orderedArray[rightStep], cursor);
        }
    }
    if (node.key < value) {
        let leftStep = middleValue - cursor++;
        if (node.left == null) return node;
        if (leftStep >= 0) {
            node.left = genABR(node.left, orderedArray[leftStep], cursor);
        }
    }
    return node;
}

main();
