# assignment_data_structures_node  

1. Accessing an item by index in an array  
  -O(1) the index is know it will always take the same number of operations.  
2. Unshifting a new item into the beginning of an array  
  -O(n) you must rebuild the entire array.  
3. Pushing an item onto the end of an array  
  -if it is a "Dynamic" array and there is space it will be O(1) else O(n) due to rebuilding the array.  
4. Upcasing a String  
  -O(n) strings are immutable which means you will have to create a new one.  
5. Reversing a String  
  -O(n) i think because you must rebuild the array from the back.  
6. Finding the max of an array  
  -O(n) must check every number.  
7. splitting a String  
  -O(n) must allocate new memory.  
8. Inserting a value to an Object  
  -O(n) must rebuild the object.  
9. Retrieving the keys of an Object ({ foo: "bar" }.keys)  
  -O(1) direct access.  
