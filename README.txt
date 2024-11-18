Challenge: Mixed Data Type Handling
Create a JavaScript function called processData that takes an array as an argument. This array can contain elements of different data types (numbers, strings, booleans, null, undefined, objects, and arrays). The function should iterate over the array and perform the following actions based on the data type of each element:

Number: Add the number to a running total sum.

String: Concatenate the string to a running total string.

Boolean: Count the number of true values.

Null or Undefined: Count how many times these appear.

Object: Count the number of objects.

Array: Count the number of arrays.

Finally, the function should return an object with the results of these operations, structured like this:



{
  totalSum: <sum_of_numbers>,
  concatenatedString: "<concatenated_string>",
  trueCount: <number_of_true_values>,
  nullUndefinedCount: <number_of_nulls_and_undefineds>,
  objectCount: <number_of_objects>,
  arrayCount: <number_of_arrays>
}
Example Input:


const mixedArray = [1, "hello", true, false, null, undefined, {name: "John"}, [1, 2, 3], 2, "world", true];
Expected Output:


{
  totalSum: 3,
  concatenatedString: "helloworld",
  trueCount: 2,
  nullUndefinedCount: 2,
  objectCount: 1,
  arrayCount: 1
}