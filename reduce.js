/*Write a function called extractValue which accepts an array of objects and a key and returns a new array with the value of each object at the key.
Examples:
    const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}]
    extractValue(arr,'name') // ['Elie', 'Tim', 'Matt', 'Colt']*/

function extractValue(arr, key) {
    //Use the reduce method to accumulate the values into a new array
    return arr.reduce(function(result, obj){  //result represent the accumulating result (initially an emtpy array), and obj represents each object in the array.
        result.push(obj[key]);  //Inside the callback function, we access the value associated with the specified 'key' in each object using 'obj[key].This accumulates the values extracted from each object into the result array.
        return result;  //Contains all the extracted values from the objects in the input array.
    },[]);
}

/*Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count
Examples:
    vowelCount('Elie') // {e:2,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};*/

function vowelCount(str) {
    //Convert the input string to lowercase to make it case-insensitive
    str = str.toLowerCase();
    //Define an initial object to store vowel counts
    const vowelCounts = {
        a: 0,
        e: 0,
        i: 0,
        o: 0,
        u: 0,
    };
    //Use the reduce method to count vowel occurences
    return str.split('').reduce(function(counts,char){  //Use the reduce method on the str converted to an array of characters.  We're accumulating vowel counts.  Counts represents the accumulating counts object, and char represents each character in the inut string.
        if ('aeiou'.includes(char)){  //Insode the callback function, we check char is one of those vowels.
            counts[char]++;  //If char is a vowel, we increment the count for that vowel in the counts object, which updates the count for the specific vowel.
        }
        return counts;  //Contains the counds of each vowel in the input string.
    }, vowelCounts);
}

/*Write a function called addKeyAndValue which accepts an array of objects and returns the array of objects passed to it with each object now including the key and value passed to the function.
Examples:
    const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}];
    addKeyAndValue(arr, 'title', 'Instructor') // 
      [
        {title: 'Instructor', name: 'Elie'}, 
        {title: 'Instructor', name: 'Tim'}, 
        {title: 'Instructor', name: 'Matt'}, 
        {title: 'Instructor', name: 'Colt'}*/

function addKeyAndValue(arr, key, value) { 
    //Use the reduce method to add the key and value to each object
    return arr.reduce(function (result, obj) {  //result is used to iterate over the elements of an array and accumulate a single result - accumulate objects with the added key-value pair.  And executed once for each element in the 'arr'.  Result parameter represents the accumulating result (initially an empty array), and obj represent each object in the array.  
        obj[key] = value;  //Add the key-value pair to the object
        result.push(obj);  //Push the updated object to the result array
        return result;  //Contains the objects with the added-key-value pairs, an array of objects with the specified key-value pair added to each object.
    }, []);
}

/*Write a function called partition which accepts an array and a callback and returns an array with two arrays inside of it. The partition function should run the callback function on each value in the array and if the result of the callback function at that specific value is true, the value should be placed in the first subarray. If the result of the callback function at that specific value is false, the value should be placed in the second subarray. 
Examples:
    function isEven(val){
        return val % 2 === 0;
    }
    const arr = [1,2,3,4,5,6,7,8];
    partition(arr, isEven) // [[2,4,6,8], [1,3,5,7]];
    function isLongerThanThreeCharacters(val){
        return val.length > 3;
    }
    const names = ['Elie', 'Colt', 'Tim', 'Matt'];
    partition(names, isLongerThanThreeCharacters) // [['Elie', 'Colt', 'Matt'], ['Tim']]*/

function partition(arr, callback) {
    //Use the reduce method to split the array into two subarrays
    return arr.reduce(function (result, val) {  //We want to accumulate two subarrays based on the condition provided by callback, which takes a callback function as its first argument.  And, it is executed once for each element in the arr.  It received two parameters, result represents the accumulating result (initially an array with two empty subarrays), and val represents each element in the array.
        if (callback(val)) {  //We call the callback function with the current val as its argument.  If it returns true, it means that the element meets a certain condition.
            //If the callback returns true, add the value to the first subarray (located at result[0]).  This means that the element satisfies the condition provided by the callback.
            result[0].push(val);
        } else {
            // If the callback returns false, add the value to the second subarray. In this case, we add the current val to the second subarray (located at result[i]).  This means that the element does not satisfy the condition.
            result[1].push(val);
        }
        return result;  //Contains two subarrays: one with elements that met the condition and one with elements that did not.
    }, [[], []]); 
}