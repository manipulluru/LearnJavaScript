
////Assignment 1 -  to check whether a given number is negative/positive/zero

function checkNumber(number){
    if(number >0){
        console.log('Provided input '+ number +' is a positive number')
    } else if(number <0){
        console.log('Provided input '+number +' is a negative number')
    } else{
        console.log('Provided input '+number +' is zero ')
    }

}
checkNumber(5);
checkNumber(-25);
checkNumber(0);
//Assignment 2 - factorial of a number
function factorial(number){
    if(number> 0){
        let result = 1;
        for(let i=1; i<=number;i++){
            result = result *i;
        }
        return result;
    } else {
        return 0;
    }
}
console.log('factorial of 5 is : '+factorial(5))
console.log('factorial of 10 is : '+factorial(10))
console.log('factorial of 0 is : '+factorial(0))
console.log('factorial of -10 is : '+factorial(-10))

//Assignment 3 - get largest number from 2 inputs
function getLargeNumber(a, b){
    if(a>b){
        return a;
    } else if (b>a){
        return b
    } else{
        return a;
    }
}

console.log('Largest number from 10, 20 is '+ getLargeNumber(10,20))
console.log('Largest number from 25, 20 is '+ getLargeNumber(25,20))
console.log('Largest number from 10, 10 is '+ getLargeNumber(10,10))

//Assignment 4 - palindrome
function checkPalindrome(input) {
    const len = input.length;
    for (let i = 0; i < len / 2; i++) {
        if (input[i] !== input[len - 1 - i]) {
            return ' is not a palindrome';
        }
    }
    return ' is a palindrome';
}
const input = prompt('Enter a string to check for palindrome: ');
if(input == '' || input == null){
    console.log('Please provide a valid input string')
} else {
    const value = checkPalindrome(input);
    console.log(input+ ' '+value);
}

//Assignment 5- prime numbers till provided input
function isPrime(num) {
    if (num == 1 || num == 0) return false;
 
    // Run a loop from 2 to num-1
    for (var i = 2; i < num; i++) {
        // if the number is divisible by i, then num is not a prime number.
        if (num % i == 0) return false;
    }
    // otherwise, num is prime number.
    return true;
}
const userInput = prompt('enter a number to get prime numbers ');
if(isNaN(userInput) || userInput == '' || userInput < 0){
    console.log('Please provide a valid positive number as input');
} else {
    var result = [];
    for (var i = 1; i <= userInput; i++) {
        // check if current number is prime
        if (isPrime(i)) {
            result.push(i);
        }
    }
    console.log('prime numbers until '+userInput+ ' are '+ result);
}

//Assignment 6 - Calculate based on 2 input numbers and input operator
function calculate(a,b, operator){
    switch(operator){
        case '+':
            return a+b;
        case '-':
            return a-b;
        case '*':
            return a*b;
        case '/':
            if(b!== 0){
                return a/b;
            } else {
                return 'cannot divide by 0';
            }
        default:
            return 'Invalid operator';
    }
}
console.log(calculate(5,10,'+'))
console.log(calculate(5,10,'-'))
console.log(calculate(5,10,'*'))
console.log(calculate(5,10,'/'))
console.log(calculate(5,0,'/'))

//Assignment 7 - count no of vowels in a given string
function countVowels(str){
    let vowelsCount = 0;
    const vowels = ["a", "e", "i", "o", "u"]
    for(let ch of str.toLowerCase()){
        if(vowels.includes(ch)){
            vowelsCount++;
        }
    }
    return vowelsCount;
}
const str = prompt('enter a string');
console.log('no of vowels in '+str + ' is/are '+ countVowels(str));


//Assignment 8:
function checkPerfectNumber(num){
    if (isNaN(num) || num<1){
        return false;
    }
    let sum =0;
    for(let i=1;i<=Math.floor(num/2);i++){
        if(num %i == 0){
            sum+=i;
        }
    }
    return (sum == num);
}

console.log('10 is perfect number '+ checkPerfectNumber(10));
console.log('6 is perfect number '+ checkPerfectNumber(6));
console.log('96 is perfect number '+ checkPerfectNumber(96));

//Assignment 9 - fibonacci till given input
// program to generate fibonacci series up to a certain number

// take input from the user
const number = parseInt(prompt('Enter a positive number: '));
let n1 = 0;
let n2 = 1;


console.log('Fibonacci Series:');
console.log(n1); // print 0
console.log(n2); // print 1

let nextTerm = n1 + n2;

while (nextTerm <= number) {

    // print the next term
    console.log(nextTerm);

    n1 = n2;
    n2 = nextTerm;
    nextTerm = n1 + n2;
}

//Assignment 10 - Multiplication table
function multiplicationTable(tableNum){
    
    console.log('10 Multiples of '+tableNum+ ':')
    for(i=1;i<=10;i++){
        let result = tableNum * i;
        console.log(tableNum +' x ' + i+ ' = '  + result)
    }
}
const tableNum = parseInt(prompt('Enter a number: '));
multiplicationTable(tableNum);