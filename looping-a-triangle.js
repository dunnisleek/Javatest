//Write a loop that makes seven calls to console.log to output the following triangle:

//alert('hello')
/*
for (let line = "#"; line.length < 8; line += "#")
 console.log(line);
 
 for (let i ="$"; i.length < 8; i += "$")
 console.log(i)
*/
 for (let num = 0; num <= 101; num += 1){
     let output = '';
     if(num % 3 == 0) output += "frizz";
     if( num % 5 == 0) output += "buzz";
     console.log(output|| num)
 }
 /*
 for (let n = 1; n <= 100; n++) {
    let output = " ";
    if (n % 3 == 0) output += "Fizz";
    if (n % 5 == 0) output += "Buzz";
    console.log(output || n);
  }

 /*
 For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.
 */

