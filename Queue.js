function Node(ele){
    this.val = ele;
    this.next = null;
    this.prev = null;
    this.getVal = () => {
        return this.val;
    }
}

function Queue(){
    this.head = null;
    this.last = null;

    this.size = () => {
        let size = 0;
        if (this.head == null){
            return 0;
        }
        else{
            dummyHead = this.head;
            size += 1;
            while(dummyHead.next != null){
                size += 1;
                dummyHead = dummyHead.next;
            }
        }
        return size;
    }

    this.isEmpty = () => {
        return this.size() == 0;
    }

    this.enqueue = (ele) => {
        node = new Node(ele);
        if(this.isEmpty()){
            this.head = node;
            this.last = node;
        }
        else{
            dummyHead = this.head;
            while(dummyHead.next != null){
                dummyHead = dummyHead.next;
            }
            dummyHead.next = node;
            dummyHead.next.prev = dummyHead;
            this.last = node;
        }
    }

    this.dequeue = () => {
        if (this.isEmpty()){
            console.log('No list exists');
        }
        else{
            if (this.head.next != null){
                temp = this.head.next;
                this.head.next = null;
                this.head = temp;
                temp.prev = null;
            }
            else{
                this.head = null;
            }
            
        }
    }

    this.peek = () => {
        return this.head.getVal();
    }

    this.rear = () => {
        return this.last.getVal();
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
}

test = new Queue()
test.enqueue(4)


console.log(test.rear())




