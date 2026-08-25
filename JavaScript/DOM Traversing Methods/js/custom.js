
// var output = document.querySelector('p').parentNode;

// var output = document.querySelector('.accordion-content').parentNode;

// var output = document.querySelector('html').parentNode;

// var output = document.querySelector('.accordion-content').parentElement;
// var output = document.querySelector('html').parentElement;


// var output = document.querySelector('.space-y-4').childNodes;
// var output = document.querySelector('.space-y-4').children;

// var output = document.querySelector('.space-y-4').lastElementChild;


// console.log(output.innerText)


var allQuestions = document.querySelectorAll('.accordion-btn');

allQuestions.forEach((question, index) => {
    question.addEventListener('click', (event) => {

        question.nextElementSibling.classList.toggle('max-h-0');
        question.nextElementSibling.classList.toggle('overflow-hidden');

        if(question.lastElementChild.innerText.trim() == '+'){
            question.lastElementChild.innerText = '-';
        } else {
            question.lastElementChild.innerText = '+';
        }

        allQuestions.forEach((v, i) => {
            if(index != i){
                v.nextElementSibling.classList.add('max-h-0');
                v.nextElementSibling.classList.add('overflow-hidden');
                v.lastElementChild.innerText = '+';
            }
        })
    })
})

