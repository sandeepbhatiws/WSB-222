
// const copyCut = () => {
//     var output = document.getElementById('text').value;
//     console.log(output)
// }

// document.getElementById('text').value = 'HEllo';

const copyCut = (output) => {
    document.querySelector('#output').innerText = output.value;
}

const showPassword = (button) => {
    var type = document.getElementById('password').type;

    if(type == 'text'){
        document.getElementById('password').type = 'password';
        button.innerText = 'Show Password';
    } else {
        document.getElementById('password').type = 'text';
        button.innerText = 'Hide Password';
    }
}

const imageChange = (value) => {
    // if(value == 1){
    //     document.getElementById('image').src = 'images/budget_1.png';
    // } else if(value == 2){
    //     document.getElementById('image').src = 'images/budget_2.png';
    // }

    // document.getElementById('image').src = value;

    // if(value == 1){
    //     document.getElementById('image').src = document.getElementById('image1').src;
    // } else if(value == 2){
    //     document.getElementById('image').src = document.getElementById('image2').src;
    // }

    document.getElementById('image').src = value.src;
}