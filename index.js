// // if (whatEverIPut)
// function isArrayOrObjectToArray(input) {
//     if (Array.isArray(input)) {
//       // Already an array, return it directly
//       return input;
//     } else if (typeof input === 'object' && input !== null) {
//       // It's an object (excluding null), convert to array using Object.values
//       return Object.values(input);
//     } else {
//       // Not an array or object, return the input as is (handles primitives like numbers, strings)
//       return input
//     }
// }

// function myEach(collection, callback){
    
//     // let collection=[1, 2, 3]

    
//     // return original collection
//     return 
// }

// fuction callback(elements){

//     for(let item of collection){
//         return item

//     }
// }
// kimeniramba!!!



// checks if the input is an array. If not it converts an object to an array
// uses an ternary expression
const whatEverIPut= function(collection) {
    return (collection instanceof Array) ? collection.slice() : Object.values(collection);
  }
    // instanceof:tests to see if the prototype property of a constructor appears anywhere in the prototype chain of an object. 
                // The return value is a boolean value. Its behavior can be
    
    //Object.value(collection):This method extracts the values (properties without keys) 
       // from the object and returns them as a new array

    // .slice():returns a new array   

   

// ....................................................................................
// using myEach as a function that
// Iterates over the collection of elements, passing each element in turn to the callback 
// function. Returns the original, unmodified, collection.


const myEach = function(collection, callback) {

    // newCollection is the new array
    const newCollection = whatEverIPut(collection);
  
    // iterating items in the new array to the callback function
    // it uses for
    for (let i = 0; i < newCollection.length; i++) {
      callback(newCollection[i]);
    }
  
    return collection;
}

// ....................................................................................


const myMap = function(collection, callback) {

    const newCollection = whatEverIPut(collection);

    // empty array
    let newArray=[];


    // for(let item of collection){
    //     newArray.push(callback(item))
    // }

    for (let i = 0; i < newCollection.length; i++) {
        newArray.push(callback(newCollection[i]));
      }


    return newArray;
    }


//........................................................................................ 

const myReduce = function(collection, callback, acc) {
    let newCollection = standardizeInput(collection);

    if (!acc) {
        acc = newCollection[0];
        newCollection = newCollection.slice(1);
      }
    
      const len = newCollection.length;
    
      for (let i = 0; i < len; i++) {
        acc = callback(acc, newCollection[i], newCollection);
      }
      return acc;
    }
  
// .........................................................................................

const myFind = function(collection, predicate) {
    const newCollection = standardizeInput(collection);
  
    for (let idx = 0; idx < newCollection.length; idx++) {
      if (predicate(newCollection[idx])) {return newCollection[idx]};
    }
  
    return undefined;
  }
  

// .............................................................................................

  const myFilter = function(collection, predicate) {
    const newCollection = standardizeInput(collection);
  
    const newArr = [];
  
    for (let idx = 0; idx < newCollection.length; idx++) {
      if (predicate(newCollection[idx])) newArr.push(newCollection[idx]);
    }
  
    return newArr;
  }
  
// ...........................................................................................

  const mySize = function(collection) {
    const newCollection = standardizeInput(collection);
    return newCollection.length;
  }
//....................................................................................... 
  // Array Functions
  
  const myFirst = function(arr, stop=false) {
    return (stop) ? arr.slice(0, stop) : arr[0];
  }
   
//........................................................................................  

  const myLast = function(arr, start=false) {
    return (start) ? arr.slice(arr.length-start, arr.length) : arr[arr.length-1];
  }

// ...............................................................................................  
  
const mySortBy = function(arr, callback) {
    const newArr = [...arr];
    return newArr.sort(function(a, b) {
      if (callback(a) > callback(b)) {
        return 1;
      } else if (callback(b) > callback(a)) {
        return -1;
      } else {
        return 0;
      }
    });
  }
  

  const unpack = function(receiver, arr) {
    for (let val of arr) {
      receiver.push(val);
    }
  }
  

  const myFlatten = function(collection, shallow, newArr=[]) {
    if (shallow) {
      for (let val of collection) {
        Array.isArray(val) ? unpack(newArr, val) : newArr.push(val);
      }
    } else {
      
      for (let val of collection) {
        if (Array.isArray(val)) {

          myFlatten(val, false, newArr);
        } else {
          newArr.push(val);
        }
      }
    }
    return newArr;
  }
  
  // Object Functions
  
  const myKeys = function(obj) {
    const keys = [];
    for (let key in obj){
      keys.push(key);
    }
    return keys;
  }
  
  const myValues = function(obj) {
    const values = [];
    for (let key in obj){
      values.push(obj[key]);
    }
    return values;
  
  }
  



