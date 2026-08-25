
var numbers = [32,22,15,66,76,54];

numbers[6] = 55;
numbers[numbers.length] = 45;
numbers[0] = 15;
numbers[8] = 'Sandeep Bhati';
numbers[9] = true;
numbers[10] = 15;

numbers.push(101,102)    // Last Value Add
numbers.unshift(1,2)     // Starting Value Add

var text = numbers.pop()    /// last Value removed
numbers.shift();    // first value removed

//console.log(text);
//console.log(numbers.unshift(101,102))

//console.log('Length - ', numbers.length);
// console.log('Array - ', numbers.toString());
//console.log(numbers[5])


for(var i = 0; i <= numbers.length-1; i++){
//    console.log(numbers[i])
}

//document.write(numbers)


for(var i in numbers){
 //   console.log(numbers[i])
}

for(var i of numbers){
    console.log(i)
}