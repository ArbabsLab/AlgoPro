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
        }
        else{
            dummyHead = this.head;
            while(dummyHead.next != null){
                dummyHead = dummyHead.next;
            }
            dummyHead.next = node;
            dummyHead.next.prev = dummyHead;
        }
    }

    this.dequeue = () => {
        //write dequeue
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

test.enqueue(2)
test.enqueue(3)
test.enqueue(4)
test.enqueue(5)





