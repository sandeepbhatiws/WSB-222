
function checkVoting(){
    var age = prompt('Enter your age ?');

    if(age >= 18){
        console.log('Eligible for voting.')
    }
}

var checkEvenNumber = () => {
    var number = prompt('Enter your number ?');

    if(number % 2 == 0){
        console.log('Even Number')
    } else {
        console.log('Not a Even Number')
    }
}

var checkSignal = () => {
    var signal = prompt('Enter the signal (red, green, yellow) ?')

    signal = signal.toLowerCase();

    if(signal == 'red'){
        console.log('Red Signal')
    } else if(signal == 'green'){
        console.log('Green Signal')
    } else if(signal == 'yellow'){
        console.log('Yellow Signal')
    } else {
        console.log('Invalid Value')
    }
}

var gradeSystem = () => {

    var grade = prompt('Enter the value of grade')

    // if(grade >= 60 && grade <=100){

    // }

    // (300 * 9/5) + 32


    if(grade > 100){
        console.log('Invalid Value');
    } else if(grade >= 60){
        console.log('Grade A');
    } else if(grade >= 48){
        console.log('Grade B');
    } else if(grade >= 36){
        console.log('Grade C');
    }else if(grade > 0) {
        console.log('Grade D')
    } else {
        console.log('Invalid Value');
    }
}


const temperatureConverter = () => {
    var from = prompt('Enter the value of from (C,F,K)').toLowerCase();
    var to = prompt('Enter the value of to (C,F,K)').toLowerCase();
    var value = prompt('Enter the value to convert.');

    if(from == 'c' && to == 'f'){
        var formula = (value * 9/5) + 32;
        console.log(formula);
    } else if(from == 'f' && to == 'c') {
        var formula = (value - 32) * 5/9;
        console.log(formula.toFixed(2));
    }

}