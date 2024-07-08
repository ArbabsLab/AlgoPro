function Node(ele){
    this.val = ele;
    this.right = null;
    this.left = null;

    this.getVal = () => {
        return this.val;
    }
}