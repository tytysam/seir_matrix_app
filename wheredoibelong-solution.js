// # Return the lowest index at which a value (second argument) should be inserted
// # into an array(first argument) once it has been sorted.The returned value should
// # be a number.

// # PSEUDO =================================================

// # START PROGRAM
// #   ADD the second input to the array input.
// #   SORT the array.
// #   Convert the array into an object where the keys are the values of the array and the values are the index of the array.
// #   RETURN the value of the object at the value of the second input.
// # END PROGRAM

// # =========================================================
// # check if the args num is inside the array... if yes, don't add it to the array
// # create a function who is gonna be a helper to your
// # sort the array
// # return the indexOf of the args number

// *** initially started this as a Ruby file.... But I'm tired, man. Working things out in JS first.

const getIndexToInsert = (array, number) => {
  // First... sort the aray from lowest to highest...
  array.sort((a, b) => {
    return a - b;
  });

  // Then... compare the items in the array starting with the smallest item.
  // if an item in the array is greater than the number we're trying to insert...
  // then return the index as an integer
  for (let i = 0; i < array.length; i++) {
    if (array[i] >= number) {
      return parseInt(i);
    }
  }

  // If our code makes it to this output, then our number should be inserted at the end of the array
  return array.length;
};

test_array = [3, 40, 17, 5, 7, 13];
test_number = 11;

console.log(getIndexToInsert(test_array, test_number));
