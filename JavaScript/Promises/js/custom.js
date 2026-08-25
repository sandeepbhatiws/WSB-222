// var data = fetch('https://dummyjson.com/products');

// new Promise((accept, reject) => {
//     accept(data); // Make Executable Function
// })
// .then((result) => {    
//     new Promise((complete) => {
//         complete(result.json())
//     })
//     .then((response) => {
//         console.log(response)
//     })
// })
// .catch(() => {
//     console.log('Promise Incomplete')
// });


// fetch('https://dummyjson.com/products')
// .then((result) => {
//     result.json()
//     .then((response) => {
//         console.log(response)
//     })
// })
// .catch(() => {
    
// })

// const productData = async() => {
//     var data = await fetch('https://dummyjson.com/products');
//     var data = await data.json();
//     console.log(data)
// }

// productData()'

var current_page = 1;
var limit = 12;
var skip  = 0;
var total_products = 0;
var total_pages = 0;

const productFetch = async(limit, skip, current_page) => {
    var productData = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`);
    var productData = await productData.json();

    total_pages = Math.ceil(productData.total/limit);

    displayProducts(productData.products, total_pages, current_page);
}

productFetch(limit, skip, current_page)

const displayProducts = (products, total_pages, current_page) => {

    var dataDisplay = '';

    products.forEach((value, index) => {
        dataDisplay += `<div class="bg-white rounded-lg shadow-lg overflow-hidden">
                <img src="${ value.thumbnail }" alt="Product 1" class="w-full object-cover">
                <div class="p-4">
                    <h2 class="text-xl font-semibold text-gray-800">${ value.title }</h2>
                    <p class="text-gray-600 mt-2">${ value.description }</p>
                    <div class="flex items-center justify-between mt-4">
                        <span class="text-lg font-bold text-gray-900">$${ value.price }</span>
                        <button class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Add to Cart</button>
                    </div>
                </div>
            </div>`;
    })

    document.getElementById('product-display').innerHTML = dataDisplay;

    paginagtion(total_pages, current_page);
}

const paginagtion = (total_pages, current_page) => {
    var paginate = `<nav class="inline-flex rounded-md shadow-sm" aria-label="Pagination">
        <a href="#" class="px-4 py-2 bg-white border border-gray-200 text-gray-600 rounded-l-md hover:bg-gray-50">
            Previous
        </a>`;

        for(var i = 1; i <= total_pages; i++){
            if(current_page == i){
                paginate  +=  `<a class="px-4 cursor-pointer py-2 bg-blue-600 border border-gray-200 text-white font-medium page">
                    ${i}
                </a>`;
            } else {
                paginate += `<a class="px-4 py-2 cursor-pointer bg-white border-t border-b border-gray-200 text-gray-600 hover:bg-gray-50 page"> ${i} </a>`
            }
            
        }
        
    paginate  +=  `<a href="#" class="px-4 py-2 bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 rounded-r-md">
            Next
        </a>
    </nav>`

    document.querySelector('.pagination').innerHTML = paginate;

    applyPagination();
}




const applyPagination = () => {
    var pages = document.querySelectorAll('.page');

    pages.forEach((v,i) => {
        v.addEventListener('click', (event) => {
            current_page = event.target.innerText.trim();
        })       
    })

    skip = (current_page - 1) * limit;

    productFetch(limit, skip, current_page);
}