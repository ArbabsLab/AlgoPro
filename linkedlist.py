
class Node:
    def __init__(self) -> None:
        self.data = None
        self.next = None

class LinkedList:
    def __init__(self) -> None:
        self.head = None
    
    def printList(self):
        traversalNode = Node()
        traversalNode.next = self.head
        while traversalNode.next != None:
            print(traversalNode.next.data, '->', end=' ')
            traversalNode = traversalNode.next
        print('NULL')
    def insertHead(self, data: int):
        newNode = Node()
        newNode.data = data

        if self.head is None:
            self.head = newNode
        else:
            newNode.next = self.head
            self.head = newNode
        
    
    def insertEnd(self, data: int):
        
        newNode = Node()
        newNode.data = data
        newNode.next = None
        if self.head is None:
            self.head = newNode
        
        traversalNode = self.head
        while traversalNode.next != None:
            traversalNode = traversalNode.next
        
        traversalNode.next = newNode
        
    def insertIndex(self, data, index):
        pass
    
    
test = LinkedList()
test.insertHead(6)
test.insertEnd(5)  
test.printList()