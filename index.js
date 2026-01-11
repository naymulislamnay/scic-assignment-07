// Problem 1: Reverse a String

function reverseString(str) {

    let reversedString = "";

    for (let i = str.length - 1; i >= 0; i--) {
        reversedString = reversedString + str[i];
    }

    return reversedString;
}



// Problem 2: Count Vowels in a String

function countVowels(str) {

    let count = 0;
    let vowels = "aeiouAEIOU";

    for (let i = 0; i < str.length; i++) {

        if (vowels.includes(str[i])) {
            count = count + 1;
        }
    }

    return count;
}




// Problem 3: Check for Palindrome

function isPalindrome(str) {

    let reversed = "";

    for (let i = str.length - 1; i >= 0; i--) {
        reversed = reversed + str[i];
    }

    if (str === reversed) {
        return true;
    } else {
        return false;
    }
}





// Problem 4: Find the Maximum Number

function findMax(arr) {

    let maxNumber = arr[0];

    for (let i = 1; i < arr.length; i++) {

        if (arr[i] > maxNumber) {
            maxNumber = arr[i];
        }
    }

    return maxNumber;
}





// Problem 5: Remove Duplicates from an Array

function removeDuplicates(arr) {

    let uniqueArray = [];

    for (let i = 0; i < arr.length; i++) {

        if (uniqueArray.includes(arr[i]) === false) {
            uniqueArray.push(arr[i]);
        }
    }

    return uniqueArray;
}





// Problem 6: Sum of All Numbers in an Array

function sumArray(arr) {

    let totalSum = 0;

    for (let i = 0; i < arr.length; i++) {
        totalSum = totalSum + arr[i];
    }

    return totalSum;
}





// Problem 7: Find Even Numbers in an Array

function findEvenNumbers(arr) {

    let evenNumbers = [];

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] % 2 === 0) {
            evenNumbers.push(arr[i]);
        }
    }

    return evenNumbers;
}




// Problem 8: Capitalize First Letter of Each Word

function capitalizeWords(str) {

    let wordsArray = str.split(" ");
    let finalResult = [];

    for (let i = 0; i < wordsArray.length; i++) {

        let firstLetter = wordsArray[i][0].toUpperCase();
        let remainingLetters = wordsArray[i].slice(1);

        finalResult.push(firstLetter + remainingLetters);
    }

    return finalResult.join(" ");
}




// Problem 9: Find the Factorial of a Number

function factorial(num) {

    let result = 1;

    for (let i = 1; i <= num; i++) {
        result = result * i;
    }

    return result;
}





// Problem 10: PingPong Challenge

function pingPong() {

    let output = [];

    for (let i = 1; i <= 20; i++) {

        if (i % 3 === 0 && i % 5 === 0) {
            output.push("PingPong");
        }
        else if (i % 3 === 0) {
            output.push("Ping");
        }
        else if (i % 5 === 0) {
            output.push("Pong");
        }
        else {
            output.push(i);
        }
    }

    return output;
}

console.log(pingPong())