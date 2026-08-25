const oneTenLoop = () => {
    
    for(var i = 1; i <= 10; i++){
        console.log(i)
    }
}

const reverseLoop = () => {

    for(var i = 10; i >= 1; i--){
        console.log(i);
    }
}

var sumNumbers = () => {

    var sum = 0;

    for(var i = 1; i <= 100; i++){
        sum = sum + i;
        // console.log(sum)
    }

    console.log(sum)
}

var sumEvenNumbers = () => {
    var sum = 0;

    for(var i = 1; i <= 100; i++){
        if(i % 2 != 0){
            sum += i; // sum = sum + i;
        }
    }

    console.log(sum)
}

const whileLoop = () => {

    var i = 1;

    while(i <= 10){
        console.log(i)

        i++;
    }
    
}

const doWhileLoop = () => {
    
    var i = 1;

    do{
        console.log(i)
        i++;
    } while(i >= 10)

}

const perfectNumber = () => {

    var number = prompt('Enter any number')
    var sum = 0;

    for(var i = 1; i < number; i++){
        if(number % i == 0){
            sum += i;
        }
    }

    if(number == sum){
        console.log('Perfect Number')
    } else {
        console.log('Not a Perfect Number')
    }


}


const primeNumber = () => {
    var number = prompt('Enter any number')
    var status = 1;

    for(var i = 2; i < number; i++){
        if(number % i == 0){

            console.log(i)
            status = 0;
            break;
        }
    }


    if(status == 1){
        console.log('Prime Number')
    } else {
        console.log('Not a Prime Number')
    }
}