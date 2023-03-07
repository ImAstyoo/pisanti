// -si progetti e si scriva un algoritmo efficiente che dato un ABR u (u radice) e un valore k, stampi le chiavi di tutti i nodi di u a chiave <= k
class node {
    left;
    right;
    key;
}

function main() {
    let rad = new Node();
    let k = 23;
    let key = search(rad, k);
    efficiente(key);
}

function search(node, key) {
    switch (node.key) {
        case (key > node.key):
            return search(node.right, key);
        case (key < node.key):
            return search(node.left, key);
        default:
            return node;
    }
}

function efficiente(u) {
    console.log(u.key);
    if (u.left != null) efficiente(u.left);
    if (u.right != null) efficiente(u.right);
}