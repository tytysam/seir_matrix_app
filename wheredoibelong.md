#### WHERE DO I BELONG?

Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.   

Example

```text
getIndexToIns([1,2,3,4], 1.5)should return 1 because it is greater than 1(index 0), but less than 2(index 1).

getIndexToIns([20,3,5], 19)should return 2 because once the array has been sorted it will look like [3,5,20]and 19 is less than 20(index 2) and greater than 5(index 1)
```

**Requirement:** You must solve the algo based on the below pseudocode only.  

```ruby
# START PROGRAM
#   ADD the second input to the array input.
#   SORT the array.
#   Convert the array into an object where the keys are the values of the array and the values are the index of the array. 
#   RETURN the value of the object at the value of the second input.
# END PROGRAM
```
