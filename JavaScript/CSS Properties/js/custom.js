
// document.querySelector('.add-css-properties').addEventListener('click', () => {
//     document.getElementById('output').style.backgroundColor = 'black';
//     document.getElementById('output').style.color = 'white';
// });

// document.querySelector('.add-class').addEventListener('click', () => {
//     document.getElementById('output').classList.add('bg-black')
//     document.getElementById('output').classList.add('text-white')
// });

// document.querySelector('.remove-class').addEventListener('click', () => {
//     document.getElementById('output').classList.remove('bg-black')
//     document.getElementById('output').classList.remove('text-white')
// });

// document.querySelector('.toggle-class').addEventListener('click', () => {
//     document.getElementById('output').classList.toggle('bg-black')
//     document.getElementById('output').classList.toggle('text-white')
// });


const showAnswer = (id) => {

    const allAccordion = document.querySelectorAll('.accordion-content');

    allAccordion.forEach((v) => {
        if(v.id != 'answer_'+id){
            v.classList.add('overflow-hidden');
            v.classList.add('max-h-0');
        }        
    })

    document.getElementById('answer_'+id).classList.toggle('overflow-hidden');
    document.getElementById('answer_'+id).classList.toggle('max-h-0');
}