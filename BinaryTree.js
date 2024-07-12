function Node(ele){
    this.val = ele;
    this.right = null;
    this.left = null;

    this.getVal = () => {
        return this.val;
    }
}

function BinaryTree(){
    this.root = null;

    this.add = (ele) => {
        if (this.root == null){
            node = new Node(ele);
            this.root = node;
        }
        else{
            dummyRoot = this.root;
            node = new Node(ele);
            while(true){
                if (ele < dummyRoot.getVal()){
                    if (dummyRoot.left == null){
                        dummyRoot.left = node;
                        break;
                    }
                    else{
                        dummyRoot = dummyRoot.left;
                        continue;
                    }
                }
                else{
                    if (dummyRoot.right == null){
                        dummyRoot.right = node;
                        break;
                    }
                    else{
                        dummyRoot = dummyRoot.right;
                        continue;
                    }
                }

            }
        }
    }

    this.inorder = (node) => {
        if (node == null){
            return 'Null'
        }
        this.inorder(node.left);
        console.log(node.getVal())
        this.inorder(node.right)
    }

    this.preorder = (node) => {
        if (node == null){
            return 'Null';
        }
        console.log(node.getVal());
        this.preorder(node.left)
        this.preorder(node.right)
    }

    this.postorder = (node) => {
        if (node == null){
            return "Null";
        }

        this.postorder(node.left);
        this.postorder(node.right)
        console.log(node.getVal())
    }
}

test = new BinaryTree()
test.add(2)
test.add(1)
test.add(4)
test.add(5)
test.add(3)
test.add(-1)

console.log(test.postorder(test.root))