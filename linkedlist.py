
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
    
    def size(self) -> int:
        if self.head is None:
            return 0
        traversalNode = self.head
        size = 1
        while traversalNode.next != None:
            size += 1
            traversalNode = traversalNode.next
        return size

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
            self.insertHead(data)
        else:
            traversalNode = self.head
            while traversalNode.next != None:
                traversalNode = traversalNode.next
        
            traversalNode.next = newNode
        
    def insertIndex(self, data: int, index: int):
        newNode = Node(data)
        if self.head is None:
            self.insertHead(data)
        else:
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
        
    def removeHead(self):
        if self.head is None:
            print('List is empty')
        else:
            temp = self.head.next
            self.head.next = None
            self.head = temp

    def removeIndex(self, index: int):
        if self.head is None:
            print('List is empty')
        else:
            itr = 0
            traversalNode = self.head
            while itr < index-1:
                traversalNode = traversalNode.next
                itr += 1
            if index == 0:
                self.removeHead()
            else:
                temp = traversalNode.next.next
                traversalNode.next.next = None
                traversalNode.next = temp

    def removeEnd(self):
        if self.head is None:
            print('List is empty')
        else:
            traversalNode = self.head
            while traversalNode.next.next != None:
                traversalNode = traversalNode.next
            traversalNode.next = None
