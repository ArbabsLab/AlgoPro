function Node(ele){
    this.val = ele;
    this.next = null;
    this.getVal = function(){
        return this.val
    }
}

function LinkedList(){
    this.head = null;
    
    this.isEmpty = function(){
        if (this.head == null){
            return true;
        }
        else{
            return false;
        }
    }

    this.printList = function(){
        if(this.isEmpty()){
            console.log('No list exists')
        }
        else{
            dummyHead = this.head;
            while(dummyHead.next != null){
            console.log(dummyHead.getVal());
            dummyHead = dummyHead.next;
            }
            console.log(dummyHead.getVal())
        }
        
    }

    this.addHead = function(val){
        node = new Node(val);

        if(this.isEmpty()){
            this.head = node;
            this.head.next = null;
        }
        else{
            node.next = this.head;
            this.head = node;
        }
        
    }

    this.addEnd = function(val){
        node = new Node(val);

        if (this.isEmpty()){
            this.head = node;
            this.head.next = null;
        }
        else{
            dummyHead = this.head;
            while(dummyHead.next != null){
                dummyHead = dummyHead.next;
            }
            dummyHead.next = node;
        }

    }

    this.addIndex = function(val, index){
        node = new Node(val);
        
        dummyHead = this.head;
    }

    this.removeHead = function(){
        if(this.isEmpty()){
            console.log('No head exists')
        }
        else{
            tempNode = this.head.next;
            this.head.next = null;
            this.head = tempNode;
        }
        
    }

    this.removeEnd = function() {
        if(this.isEmpty()){
            console.log('No list exists');
        }
        else{
            dummyHead = this.head;
            while(dummyHead.next.next != null){
                dummyHead = dummyHead.next;
            }
            dummyHead.next = null;
        }
    }

    this.removeVal = function(val){
        if(this.isEmpty()){
            console.log('No list exists');
        }
        else{
            if(this.head.getVal() == val){
                temp = this.head.next;
                this.head.next = null;
                this.head = temp;
            }
            else{
                dummyHead = this.head;
                while(dummyHead.next.getVal() != val){
                    dummyHead = dummyHead.next;
                }
                temp = dummyHead.next.next
                dummyHead.next.next = null;
                dummyHead.next = temp;
            }
        }
    }
}

let test = new LinkedList()
test.addHead(4)
test.addHead(5)
test.addEnd(3)
test.addEnd(2)
test.addHead(6)

console.log(test.printList())
