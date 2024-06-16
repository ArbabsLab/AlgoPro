
class Node:
    def __init__(self, data: int):
        self.data = data
        self.next = None
    

class LinkedList:
    def __init__(self) -> None:
        self.head = None
    
    def printList(self):
        traversalNode = Node(0)
        traversalNode.next = self.head
        while traversalNode.next != None:
            print(traversalNode.next.data, '->', end=' ')
            traversalNode = traversalNode.next
        print('NULL')

    def insertHead(self, data: int):
        newNode = Node(data)
        if self.head is None:
            self.head = newNode
        else:
            newNode.next = self.head
            self.head = newNode
        
    def insertEnd(self, data: int):
        
        newNode = Node(data)
        if self.head is None:
            self.head = newNode
        
        traversalNode = self.head
        while traversalNode.next != None:
            traversalNode = traversalNode.next
        
        traversalNode.next = newNode
        
    def insertIndex(self, data: int, index: int):
        newNode = Node(data)
        if self.head is None:
            self.head = newNode
        itr = 0
        traversalNode = self.head
        while itr < index - 1:
            traversalNode = traversalNode.next
            itr += 1

        if index == 0:
            newNode.next = self.head
            self.head = newNode
        else:
            temp = traversalNode.next
            traversalNode.next = newNode
            newNode.next = temp
        

        
    
    
test = LinkedList()
test.insertHead(6)
test.insertEnd(5)
test.insertEnd(4)
test.insertEnd(3)
test.insertEnd(2)
test.insertEnd(1)
test.insertIndex(7, 3)  
test.printList()