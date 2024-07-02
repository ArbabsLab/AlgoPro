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

    this.addHead = function(val){
        node = new Node(val);
        this.head = node;
        this.head.next = null;
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

    this.printList = function(){
        dummyHead = this.head;
        while(dummyHead.next != null){
            console.log(dummyHead.getVal());
            dummyHead = dummyHead.next;
        }
        console.log(dummyHead.getVal())
    }
}

let test = new LinkedList()
test.addHead(4)
test.addEnd(3)
test.addEnd(2)
console.log(test.printList())
